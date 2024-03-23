import { UnsplashUser } from "@/models/unsplashUser";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {cache} from "react";
import { Alert } from "@/components/bootstrap";


interface PageProps {
    params: { username: string },
}

async function getUser(username: string): Promise<UnsplashUser> {
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    if (response.status === 404) notFound(); // check if user exists, if not, redirect to not found page
    return await response.json();
}

// const getUserCached = cache(getUser) Use cache if not using the native fetch


export async function generateMetadata({ params: { username } }: PageProps): Promise<Metadata> {
    // const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    // NextJS automatically deduplicate for only one API call
    const user: UnsplashUser = await getUser(username);
    return {
        title: ([user.first_name, user.last_name].filter(Boolean).join(" ") || user.username) 
        + " - NextJS 14.1 Image Gallery",
    }
}

export default async function Page({params: {username}}: PageProps){
    // const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const user: UnsplashUser = await getUser(username);
    return (
        <div>
             <Alert>
                This profile page uses <strong>generateMetadata</strong> to set the <strong>page title</strong> dynamically from the API response.
            </Alert> 

            <h1>{user.username}</h1>
            <p>First name: {user.first_name}</p>
            <p>Last name: {user.last_name}</p>
            <a href={"https://unsplash.com/" + user.username}>Unsplash Profile</a>
        </div>
    )
}