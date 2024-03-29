"use client";

import { UnsplashImage } from "@/models/unsplashImage";
import { FormEvent, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";
import styles from "./SearchPage.module.css";
import {Alert} from "@/components/bootstrap";

export default function SearchPage(){
    // For larger projects, use SWR for client side fetching
    const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(null);
    const [searchResultsLoading, setSearchResultsLoading] = useState(false);
    const [searchResultsError, setSearchResultsError] = useState(false);
    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault(); // prevent page refresh after submitting
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("query")?.toString().trim(); // name of form
        if (query){
            try{
                setSearchResults(null); // empty results first
                setSearchResultsError(false) // resets error message
                setSearchResultsLoading(true);
                const response = await fetch("/api/search/?query=" + query);
                const images: UnsplashImage[] = await response.json();
                setSearchResults(images);
            } catch(error){
                console.error(error);
                setSearchResultsError(true);
            } finally{
                setSearchResultsLoading(false);
            }
        }
    }
    return (
        <div>
            <Alert>
                This page fetches data <strong>client-side</strong>.
                In order to not leak API credentials, the request is sent to a NextJS <strong>route handler</strong> 
                that runs on the server. This route handler then fetches the data from the Unsplash API and returns it to the client.
            </Alert>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="search-input">
                    <Form.Label>
                        Search query
                    </Form.Label>
                    <Form.Control name="query" placeholder="E.g. cats, hotdogs, ..."/>
                </Form.Group>
                <Button type="submit" className="mb-3" disabled={searchResultsLoading}>Search</Button>
            </Form>
            <div className="d-flex flex-column align-items-center">
                {searchResultsLoading && <Spinner animation="border"/>}
                {searchResultsError && <p>Something went wrong, please try again</p>}
                {searchResults?.length === 0 && <p>Nothing found! Please try another query</p>}
            </div>
            {searchResults &&
                <>
                    { searchResults.map(image => (
                        <Image src={image.urls.raw} width={250} height={250} alt={image.description} key={image.urls.raw} 
                        className={styles.image}/>
                    ))
                    }
                </>
            }
        </div>
    )
}