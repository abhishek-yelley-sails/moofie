import MovieResults from "../components/MovieResults.jsx";
import { useSearchParams } from "react-router-dom";
import homeBG from "../assets/homeBG.webp";

export default function Results() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    if (query) {
        return (
            <MovieResults />
        );
    }
    return (
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
    );
}