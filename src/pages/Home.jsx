import SearchField from "../components/SearchField.jsx";
import MovieResults from "../components/MovieResults.jsx";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    return (
        <div className="SearchBox">
            <SearchField />
            {query && <MovieResults />}
        </div>
    );
}