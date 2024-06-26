import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import MovieCard from './MovieCard';
import MovieResultsLoading from './MovieResultsLoading';
import posterNotFound from '../assets/posterNotFound.webp';

const posterPrefix = "https://image.tmdb.org/t/p/original/";

export default function MovieResults() {
    const { data } = useLoaderData();
    if (!data) {
        return (
            <h1>This should not happen</h1>
        );
    }
    return (
        <div className='MovieResults Center'>
            <Suspense fallback={<MovieResultsLoading results={20} />}>
                <Await
                    /*
                    resolve={new Promise((res) => {
                        setTimeout(() => res(data), 2000)
                        })}
                    */
                    resolve={data}
                    errorElement={
                        <div>Could not load movies</div>
                    }
                >
                    {(data) => {
                        if (!data || !data.results || data.results.length === 0) {
                            return <h1>No results</h1>
                        }
                        return data.results.map((item) =>
                            <MovieCard
                                key={item.id}
                                id={item.id}
                                name={item.title}
                                posterImage={item.poster_path ? posterPrefix + item.poster_path : posterNotFound}
                                year={item.release_date ? item.release_date.split('-')[0] : "unknown"}
                            />
                        )
                    }}
                </Await>
            </Suspense>
        </div>
    );
}