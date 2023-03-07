import { Layout } from "components/Layout/Layout";
import { SearchBar } from "components/Searchbar/Searchbar";
import { Outlet, useSearchParams  } from "react-router-dom";
import { useState, useEffect } from "react";
import * as FetchTMDB from "utils/FetchTMDB";
import toast from 'react-hot-toast';
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";

export const Movies = () => {
    let [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams]= useSearchParams()
    const [movies, setMovies] = useState(null);
     const [loading, setLoading] = useState(false);

    let currentQuery = searchParams.get('query');
    let currQuery = (currentQuery && searchQuery === '') ? currentQuery : searchQuery;
 
    useEffect(() => {
        if (!currQuery) return;
  
        setLoading(true);
        FetchTMDB.searchMovies(currQuery)
            .then(m => {
                if (m.total_results !== 0) {
                    console.log(m);
                    setMovies(m);
                    setSearchParams({ query: currQuery });
                } else { toast.error('This is an error!') };
            })
        .catch(() => toast('OOPS'))
        .finally(() => setLoading(false))
}, [setSearchParams, currQuery, searchQuery]);

 function handleFormSubmit(searchQuery) {
   setSearchQuery(searchQuery);
   setMovies(null);
  };
    return (
        <div>
            <Layout />
            {<SearchBar onSubmit={handleFormSubmit} />}
            {movies && <MoviesList films={movies.results} />}
            {loading && <Loader />}
          
            <Outlet />
        </div>
    )
    
}