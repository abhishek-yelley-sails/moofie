import shimmerCssClasses from "../CSS/Shimmer.module.css";

export default function MovieLoading() {
    return (

        <main style={{ width: "100vw" }}>
            <div className="MovieContainer">
                <section className="MovieLeft" style={{ zIndex: 10 }}>
                    <div
                        className={"MoviePosterImage " + shimmerCssClasses.ShimmerBG}
                    />

                    <div className="MovieGenresContainer">
                        <a style={{ width: "80px", height: "30px", borderRadius: "8px" }} className={shimmerCssClasses.ShimmerBG} />
                        <a style={{ width: "80px", height: "30px", borderRadius: "8px" }} className={shimmerCssClasses.ShimmerBG} />
                        <a style={{ width: "80px", height: "30px", borderRadius: "8px" }} className={shimmerCssClasses.ShimmerBG} />
                    </div>

                </section>

                <section className="MovieDetails" style={{ zIndex: 10, background: "linear-gradient(to right, rgba(0,0,0,0.27), rgba(0,0,0,0) 50%)", borderRadius: "8px" }}>

                    <div className="MovieTitleBar Center">
                        <div style={{ width: "250px", height: "60px", borderRadius: "8px" }}
                            className={"MovieHeading " + shimmerCssClasses.ShimmerBG}
                        />

                        <div style={{ display: "flex", flexDirection: "column-reverse", }}>

                            <div style={{ marginLeft: "10px", width: "60px", height: "30px", borderRadius: "8px" }}
                                className={"MovieYear " + shimmerCssClasses.ShimmerBG}
                            />

                        </div>
                    </div>

                    <div className="MovieTagline Center">
                        <div style={{ marginTop: "10px", width: "150px", height: "30px", borderRadius: "8px" }}
                            className={shimmerCssClasses.ShimmerBG}
                        />
                    </div>

                    <div className="Center">
                        <div className="MovieRatingContainer Center">
                            <div style={{ width: "60px", height: "30px", borderRadius: "8px" }}
                                className={"MovieRatingValue " + shimmerCssClasses.ShimmerBG}
                            />
                        </div>
                    </div>


                    <div style={{ marginTop: "20px", marginBottom: "20px", width: "100px", height: "30px", borderRadius: "8px" }}
                        className={"Center " + shimmerCssClasses.ShimmerBG}
                    />
                    <div className="MovieOverviewContainer">
                    <div style={{ marginTop: "5px", width: "300px", height: "20px", borderRadius: "8px" }}
                        className={"MovieOverview Center " + shimmerCssClasses.ShimmerBG}
                    />
                    <div style={{ marginTop: "5px", width: "300px", height: "20px", borderRadius: "8px" }}
                        className={"MovieOverview Center " + shimmerCssClasses.ShimmerBG}
                    />
                    <div style={{ marginTop: "5px", width: "150px", height: "20px", borderRadius: "8px" }}
                        className={"MovieOverview Center " + shimmerCssClasses.ShimmerBG}
                    />

                    </div>
                </section>
            </div>
        </main>
    );
}