
import { useState, useEffect } from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import { TrendingMovies } from "components/TrendingMovies/TrendingMovies";
import { toast } from "react-hot-toast";

export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        FetchTMDB.getTrendingToday()
            .then(m => {if (m.results !== []) {
                setTrendingMovies([...m.results])
            }
                else {toast('egccccc')}
            } );
                // console.log(movie)
            
    }, [])

    return (
        
        < TrendingMovies movies = { trendingMovies } />
    )
}