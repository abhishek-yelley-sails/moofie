import SearchField from "./SearchField.jsx";
import MovieResults from "./MovieResults.jsx";

export default function SearchBox() {
    return (
        <div className="SearchBox">
            <SearchField />
            <MovieResults />
        </div>
    )
}