import MovieResults from "../components/MovieResults.jsx";
import MovieResultsLoading from "../components/MovieResultsLoading.jsx";
import { useSearchParams, useLoaderData, Await, useNavigate } from "react-router-dom";
import { Suspense, useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

export default function Results() {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const query = searchParams.get("query");
    const { data } = useLoaderData();

    useEffect(() => {
        const currentPage = searchParams.get("page");
        if (currentPage) {
            setPage(parseInt(currentPage, 10));
        }
    }, [searchParams]);

    function handlePageChange(e, value) {
        console.log(value);
        setPage(value);
        navigate(`?query=${query}&page=${value}`);
    }

    if (!query) {
        return (
            <div className='MovieResults Center'>
                <h1>No query provided!</h1>
            </div>
        )
    }
    return (
            <Suspense fallback={<div className='MovieResults Center'><MovieResultsLoading results={20} /></div>}>
                <Await
                    resolve={data}
                    errorElement={
                        <div className="MovieResults Center">Could not load movies</div>
                    }
                >
                    {(data) => (
                        <>
                            <div className='MovieResults Center'>
                                <MovieResults data={data} />
                            </div>
                            <div style={{display: "flex", justifyContent: "center"}}>
                            <div style={{margin: "30px"}}>
                            <Pagination
                                onChange={handlePageChange}
                                count={data.total_pages}
                                page={page}
                                color="primary"
                                showFirstButton
                                showLastButton
                            />
                            </div>
                            </div>
                        </>
                    )}
                </Await>
            </Suspense>
    );
}