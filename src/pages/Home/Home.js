import { useState, useEffect } from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import { TrendingMovies } from "components/TrendingMovies/TrendingMovies";
import toast, { Toaster } from "react-hot-toast";
import { Layout } from "components/Layout/Layout";
import { Outlet } from "react-router-dom";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        FetchTMDB.getTrendingToday()
            .then(m => {
                if (m.results !== []) {
                    setTrendingMovies([...m.results])
                }
                else { toast.error('OOPs') }
            });
    }, [])

    return (
        <div>
            <Layout />
            < TrendingMovies movies={trendingMovies} />
            <Toaster/>
            <Outlet />
        </div>
     
    )
};
export default Home;