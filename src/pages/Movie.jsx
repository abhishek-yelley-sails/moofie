import { useLoaderData, Await } from "react-router-dom";
import { Suspense, useRef } from "react";


import { TMDB_IMAGE_PREFIX } from "../utils/util.js";
import MovieLoading from "./MovieLoading.jsx";
import ImageModal from "../components/ImageModal.jsx";

import posterNotFound from "../assets/posterNotFound.webp";

const TMDB_GENRE_PREFIX = "https://www.themoviedb.org/genre/";

export default function Movie() {
    const { data } = useLoaderData();
    const imageModalRef = useRef(null);
    return (
        <Suspense fallback={<MovieLoading />}>
            <Await
                resolve={data}
                errorElement={<div>Could not find movie</div>}
            >
                {(data) =>
                (
                    <>
                    <ImageModal ref={imageModalRef} src={data.poster_path ? TMDB_IMAGE_PREFIX + data.poster_path : posterNotFound} title={data.title} />
                    <main style={{ width: "100vw" }}>
                        {/*
                            TODO: add portal on image hover to view full image
                        */}
                        {data.backdrop_path &&
                            <div className="MovieBackdrop"
                                style={
                                    {
                                        // background: `linear-gradient(rgba(0, 0, 0, 0), #242424), url(${TMDB_IMAGE_PREFIX}${data.backdrop_path})`,
                                        backgroundImage: `url(${TMDB_IMAGE_PREFIX}${data.backdrop_path})`,
                                    }
                                } />
                        }
                        <div className="MovieContainer">
                            <section className="MovieLeft" style={{ zIndex: 10 }}>
                                <img
                                    className="MoviePosterImage"
                                    src={data.poster_path ? TMDB_IMAGE_PREFIX + data.poster_path : posterNotFound}
                                    alt={data.name + " poster"}
                                    onClick={() => imageModalRef.current.open()}
                                />

                                <div className="MovieGenresContainer">
                                    {data.genres.map((item) => <a href={TMDB_GENRE_PREFIX + item.id} key={item.id} className="MovieGenre">{item.name}</a>)}
                                </div>

                            </section>

                            <section className="MovieDetails" style={{ zIndex: 10, background: "linear-gradient(to right, rgba(0,0,0,0.27), rgba(0,0,0,0) 50%)", borderRadius: "8px" }}>

                                <div className="MovieTitleBar Center">
                                    <h1 className="MovieHeading">{data.title}</h1>
                                    <div style={{ display: "flex", flexDirection: "column-reverse", }}>
                                        <span className="MovieYear">{data.release_date.split('-')[0]}</span>
                                    </div>
                                </div>

                                <div className="MovieTagline Center">
                                    <p><i>{data.tagline}</i></p>
                                </div>

                                <div className="Center">
                                    <div className="MovieRatingContainer Center">
                                        <span
                                            className={"MovieRatingValue " +
                                                (data.vote_average ? (data.vote_average >= 8 ? "GREEN" : (data.vote_average >= 6 ? "YELLOW" : "RED")) : "")
                                            }
                                        >
                                            {data.vote_average ? data.vote_average : "--"}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="Center"><i>Overview</i></h3>
                                <div className="MovieOverviewContainer">
                                    <p className="MovieOverview Center">{data.overview}</p>
                                </div>
                            </section>
                        </div>
                    </main>
                    </>
                )}
            </Await>
        </Suspense>
    );
}