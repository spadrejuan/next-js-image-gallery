import { UnsplashImage } from "@/models/unsplashImage";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {Alert} from "@/components/bootstrap"

export const metadata: Metadata = {
    title: "Dynamic Fetching - Next.js 14.1 Image Gallery",
  };

// export const revalidate = 0; // this page will not be cached, revalidate every refresh


export default async function Dynamic() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY, 
    {
        cache: "no-cache" // another way to dynamically cache api calls
        // next: { revalidate = 0 } // another way
    });
    const image: UnsplashImage = await response.json();
    // Calculate image dimensions
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page <strong>fetches data dynamically</strong>.
                Every time you refresh the page, you get a new image from the Unsplash API.
            </Alert>

            <Image src={image.urls.raw} width={width} height={height} alt={image.description} 
            className="rounded shadow mw-100 h-100"></Image>
            by <Link href={"/user/" + image.user.username}>{image.user.username}</Link>
        </div>
    );
}