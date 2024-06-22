import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cssClasses from './MovieCard.module.css';

export default function MovieCard({ name, year, id, posterImage }) {
    return (
        <Link to={`/movie/${id}`} style={{textDecoration: "none", color: "inherit"}}>
        <div className={cssClasses.MovieCard}>
            <div className={cssClasses.MoviePosterContainer}>
                <img src={posterImage} alt={`${name} poster`} className={cssClasses.MoviePoster} />
            </div>
            <div className={cssClasses.MovieInfo}>
                <h3 className={cssClasses.MovieName}>{name}</h3>
                <p className={cssClasses.MovieYear}>{year}</p>
            </div>
        </div>
        </Link>
    );
}


MovieCard.propTypes = {
    name: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.number,
    posterImage: PropTypes.string
}