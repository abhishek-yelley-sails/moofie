import axios from 'axios';

export default async function movieResultsFetchData({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");

    const fetchUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
        }
    };
    try {
        if (query) {
            // const response = axios(fetchUrl, options);
            // return response; // return a promise on purpose for <Await /> in MovieResults.jsx 
            return {fetchUrl, options};
            // return new Promise((resolve) => {
            //     setTimeout(async () => resolve(await response.json()), 2000);
            // });
        }
    } catch(err) {
        console.err("error:" + err);
        return [];
    }

    return [];
}