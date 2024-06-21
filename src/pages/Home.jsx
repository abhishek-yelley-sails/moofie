import SearchField from "../components/SearchField.jsx";
import MovieResults from "../components/MovieResults.jsx";

export default function Home() {
    return (
        <div className="SearchBox">
            <SearchField />
            <MovieResults />
        </div>
    );
}