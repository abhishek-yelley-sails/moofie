import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import MovieCard from './MovieCard';

const posterPrefix = "https://image.tmdb.org/t/p/original/";

export default function MovieResults() {
    const { data } = useLoaderData();

    return (
        <div className='MovieResults'>
            <Suspense fallback={<h1>Loading...</h1>}>
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
                                posterImage={posterPrefix + item.poster_path}
                            />
                        )
                    }}
                </Await>
            </Suspense>
        </div>
    );
}