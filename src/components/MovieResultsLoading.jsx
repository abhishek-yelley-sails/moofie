// import MovieCardLoading from "./MovieCardLoading.jsx";
import Skeleton from '@mui/material/Skeleton';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MovieResultsLoading({ results = 20 }) {
    const matches = useMediaQuery('(min-width:900px)');
    const elements = [];
    for (let i = 0; i < results; i++) {
        // elements.push(<MovieCardLoading key={i} />)
        elements.push(
            <Skeleton
                key={i}
                variant="rectangular"
                width={matches ? 200 : 150}
                height={matches ? 350: 237.5}
                sx={{ margin: matches ? "10px" : "5px", borderRadius: "8px" }}
            />
        )
    }
    return elements;
}