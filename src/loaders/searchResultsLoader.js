export default function searchResultsLoader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");
    const page = parseInt(url.searchParams.get("page"));

    const fetchUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page?page:1}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
        }
    };
    try {
        if (query !== '' && query !== null && query !== undefined) {
            return ({
                data: fetch(fetchUrl, options).then((res) => res.json()),
            });
        }
    } catch (err) {
        console.err("error:" + err);
        return {};
    }

    return {};
}