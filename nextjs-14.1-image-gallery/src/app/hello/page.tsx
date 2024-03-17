// this is the landing page for the 'hello' route.
// "use client" // Turns this page into a client component (NOTE: cannot use async in client components)
import { useEffect } from "react";

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //Artificial delay to load Loading page
    throw Error("Error")
    // useEffect(() => {});
    return (
        <div>
            Hello, Next.js 14.1
        </div>
    )
}