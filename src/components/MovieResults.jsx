import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const posterPrefix = "https://image.tmdb.org/t/p/original/";

export default function MovieResults({ query }) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const url = `https://api.theoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setResult(json.results))
            .catch(err => {
                console.error('error:' + err)
                throw err;
            });

    }, [query]);

    return (
        <>
            {result.map(
                (item) =>
                <MovieCard key={item.id} id={item.id} name={item.title} posterImage={posterPrefix + item.poster_path} />
            )}
        </>
    );
}

MovieResults.propTypes = {
    query: PropTypes.string
}