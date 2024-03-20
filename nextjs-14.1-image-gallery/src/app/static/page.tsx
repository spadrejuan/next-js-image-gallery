import { UnsplashImage } from "@/models/unsplashImage";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {Alert} from "@/components/bootstrap"

export const metadata: Metadata = {
    title: "Static Fetching - Next.js 14.1 Image Gallery",
  };

export default async function Static() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
    const image: UnsplashImage = await response.json();
    // Calculate image dimensions
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height
    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page <strong>fetches and caches at build time</strong>. Even though the Unsplash API always returns a new image,
                we see the same image after refreshing the page until we compile the project again or we do a hard refresh
                (CTRL + Down + F5)
            </Alert>

            <Image src={image.urls.raw} width={width} height={height} alt={image.description} 
            className="rounded shadow mw-100 h-100"></Image>
            by <Link href={"/users" + image.user.username}>{image.user.username}</Link>
        </div>
    );
}