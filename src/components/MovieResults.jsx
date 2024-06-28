/* eslint-disable react/prop-types */
import posterNotFound from '../assets/posterNotFound.webp';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

const posterPrefix = "https://image.tmdb.org/t/p/original/";

export default function MovieResults({ data }) {
    const matches = useMediaQuery('(min-width:900px)');
    if (!data || !data.results || data.results.length === 0) {
        return (
            <h1>No results</h1>
        );
    }

    return (
        <>
            {data.results.map((item) =>
                <Link key={item.id} to={`/movie/${item.id}`} style={{ textDecoration: "none", color: "inherit", height: "min-content" }}>
                    <Card sx={{ width: matches ? 200 : 150 , margin: matches ? "10px" : "5px", borderRadius: "8px" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height={matches ? 300 : 225}
                                image={item.poster_path ? posterPrefix + item.poster_path : posterNotFound}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant={matches ? "h6" : "h7"} component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.release_date ? item.release_date.split('-')[0] : "unknown"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            )}
        </>
    )
}
