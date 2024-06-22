import SearchField from "../components/SearchField.jsx";
import MovieResults from "../components/MovieResults.jsx";
import { useSearchParams } from "react-router-dom";

import homeBG from "../assets/homeBG.webp";

export default function Home() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    return (
        <div className="Home">
            <SearchField />
            {query
                ?
                <MovieResults />
                :
                <img
                    style={
                        {
                            width: "90vw",
                            height: "60vh",
                            objectFit: "cover",
                            borderRadius: "20px",
                            marginTop: "50px",
                            opacity: 0.5
                        }
                    }
                    src={homeBG} alt={"home image"}
                />
            }
        </div>
    );
}