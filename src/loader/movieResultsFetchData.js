export default async function movieResultsFetchData({ request }) {


    const url = new URL(request.url);
    const query = url.searchParams.get("query");

    const fetchUrl = `https://api.theoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
        }
    };
    try {
        if (query) {
            const response = await fetch(fetchUrl, options)
            const data = await response.json();
            return data;
        }
    } catch(err) {
        console.err("error:" + err);
        return [];
    }

    return [];
}