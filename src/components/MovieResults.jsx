import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import MovieCard from './MovieCard';

const posterPrefix = "https://image.tmdb.org/t/p/original/";

export default function MovieResults() {
    // const response = useLoaderData();
    const {fetchUrl, options} = useLoaderData();
    return (
        <div className='MovieResults'>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await
                    resolve={
                        new Promise((resolve, reject) => {
                            fetch(fetchUrl, options)
                                .then(res => res.json())
                                .then(res => {console.log(res); return resolve(res)})
                                .catch(err => reject(err));
                        })
                    }
                    errorElement={
                        <div>Could not load movies 😬</div>
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