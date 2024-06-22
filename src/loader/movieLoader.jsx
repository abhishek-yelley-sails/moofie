

export default function movieLoader({ params }) {
    const { id } = params;
    const fetchUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
        }
    };
    try {
        if (id !== '' && id !== null && id !== undefined) {
            return ({
                data: fetch(fetchUrl, options).then((res) => res.json()),
            });
        }
    } catch (err) {
        console.err("error:" + err);
        return [];
    }

    return [];
}