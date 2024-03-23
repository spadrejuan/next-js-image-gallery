import { UnsplashImage } from "@/models/unsplashImage";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {Alert} from "@/components/bootstrap"

export const metadata: Metadata = {
    title: "Incremental Static Regeneration Fetching - Next.js 14.1 Image Gallery",
  };

 export const revalidate = 15; // this page will not be cached, revalidate every refresh


export default async function ISR() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
    const image: UnsplashImage = await response.json();
    // Calculate image dimensions
    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page <strong>incremental static regeneration</strong>.
                A new image is fetched every 15 seconds (after refreshing the page) and then served
                from the cache for that duration.
            </Alert>

            <Image src={image.urls.raw} width={width} height={height} alt={image.description} 
            className="rounded shadow mw-100 h-100"></Image>
            by <Link href={"/user/" + image.user.username}>{image.user.username}</Link>
        </div>
    );
}