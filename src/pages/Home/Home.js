
import { useState, useEffect } from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import { TrendingMovies } from "components/TrendingMovies/TrendingMovies";
import { toast } from "react-hot-toast";
import { Layout } from "components/Layout/Layout";
import { Outlet } from "react-router-dom";

export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        FetchTMDB.getTrendingToday()
            .then(m => {if (m.results !== []) {
                setTrendingMovies([...m.results])
            }
                else {toast.error('egccccc')}
            } );
                
    }, [])

    return (
        <div>
            <Layout/>
            < TrendingMovies movies={trendingMovies} /> 
            <Outlet/>
        </div>
     
    )
}