// SHown in any unexpected error. Has to be a client component
"use client"

import { Button } from "react-bootstrap"

interface ErrorPageProps {
    error: Error
    reset: () => void //preset function to rerender page
}
export default function Error({error, reset}: ErrorPageProps) {
    return (
        <div>
            <h1>Error</h1>
            <p>Something went wrong...</p>
            <Button onClick={reset}>Try Again</Button>
        </div>
    )
}