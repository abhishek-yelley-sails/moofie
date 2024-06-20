import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

export default function MovieCard({ name, year, id, posterImage }) {
    const navigate = useNavigate();
    return (
        <div className="MovieCard" onClick={() => navigate(`/movie/${id}`)}>
            <img src={posterImage} alt={`${name} poster`} className="MoviePoster" />
            <div className="MovieInfo">
                <h3 className="MovieName">{name}</h3>
                <p className="MovieYear">{year}</p>
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