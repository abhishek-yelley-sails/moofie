import MovieResults from "../components/MovieResults.jsx";
import MovieResultsLoading from "../components/MovieResultsLoading.jsx";
import { useSearchParams, useLoaderData, Await } from "react-router-dom";
import { Suspense } from 'react';

export default function Results() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const { data } = useLoaderData();
    if(!query) {
        return (
            <div className='MovieResults Center'>
                <h1>No query provided!</h1>
            </div>    
        )
    }
    return (
        <div className='MovieResults Center'>
            <Suspense fallback={<MovieResultsLoading results={20} />}>
                <Await
                    resolve={data}
                    errorElement={
                        <div>Could not load movies</div>
                    }
                >
                    {(data) => (
                        <MovieResults data={data} />
                    )}
                </Await>
            </Suspense>
        </div>
    );
}