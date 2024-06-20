import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

export default function MovieCard({ name, year, id, posterImage }) {
    const navigate = useNavigate();
    return (
        <div className="movie-card" onClick={() => navigate(`/movie/${id}`)}>
            <img src={posterImage} alt={`${name} poster`} className="movie-poster" />
            <div className="movie-info">
                <h3 className="movie-name">{name}</h3>
                <p className="movie-year">{year}</p>
            </div>
        </div>
    );
}


MovieCard.propTypes = {
    name: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.number,
    posterImage: PropTypes.string
}