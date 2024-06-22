import MovieCardLoading from "./MovieCardLoading.jsx";

export default function MovieResultsLoading({ results = 20 }) {
    const elements = [];
    for(let i=0; i<results; i++) {
        elements.push(<MovieCardLoading key={i} />)
    }
    return elements;
}