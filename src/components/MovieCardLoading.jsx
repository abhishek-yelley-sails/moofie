import cssClasses from './MovieCard.module.css';
import shimmerCssClasses from '../CSS/Shimmer.module.css';

export default function MovieCardLoading() {
    return (
        <div className={cssClasses.MovieCardLoading}>
            <div className={cssClasses.MoviePosterLoading + " " + shimmerCssClasses.ShimmerBG} />
            <div className={cssClasses.MovieInfo}>
                <div className={cssClasses.MovieNameLoading + " " + shimmerCssClasses.ShimmerBG}></div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={cssClasses.MovieYearLoading + " " + shimmerCssClasses.ShimmerBG}></div>
                </div>
            </div>
        </div>
    );
}