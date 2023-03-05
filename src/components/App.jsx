import { useState, useEffect } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { MoviesList} from "components/MoviesList/MoviesList";
import * as FetchTMDB  from "utils/FetchTMDB";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Route, Routes } from 'react-router-dom';
import { Home } from "pages/Home/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";

// export const App =()=> {
//   const [searchQuery, setSearchQuery] = useState('');
//   // const [page, setPage] = useState(1);
//   const [movies, setMovies] = useState({});
//   const [films, setFilms] = useState([]);
//   const [error, setError] = useState(null);
 
//   const [loading, setLoading] = useState(false);

  
//   useEffect(() => {
//     if (searchQuery === '') return;

//     setLoading(true);
// // searchQuery, page, error
//     FetchTMDB.searchMovies(searchQuery)
//       // .then(images => {
//       // if (images.total !== 0) {
//       .then(movies => {
//         if (movies.total_results !== 0) {
//           console.log(movies)
//           setFilms(s => [...s, ...movies.results]);
//           // setMovies();
//         }
       
//       }
//         // setImages,
//         )
//           // setCard(prevState => [...prevState, ...images.hits]);
//             //  }
//               // // else {
//               //   Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//               // };
//             // })
//             .catch(()=> setError(error))
//             .finally(()=>setLoading(false)) 
//   },[error, movies, searchQuery])

//  function handleFormSubmit(searchQuery) {
//    setSearchQuery(searchQuery);
//    setFilms([]);
//    setMovies({});
//   //  setPage(1);
//   };

//   const onClickLoadMore = () => {
//     return movies.page + 1
//   };

//   return (
//           <div>
//         <SearchBar onSubmit={handleFormSubmit} />
//         {<MoviesList films={films} />}
//         {loading && <Loader />}
//         {!loading && movies.total_results > 0 && <Button onClick={() => onClickLoadMore()} />}
//         {/* /* { images.total !== 0 && <ImageGallery card={card} /> }
       
//         { !loading && images.total !== 0 && (images.total / page / 12 >= 1) && <Button onClick={() => onClickLoadMore()} /> }
//         { images.total === 0 && error.message } */ }
//       </div>
//     )
  
// }

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='movies/:moveiId' element={<MovieDetails />}></Route>
                {/* <Route index element={<Layout />} />
                <Route path='movies' element={<Movies />} />
                <Route path='movies/:moveiId' element={<MovieDetails />}>
                    <Route path='cast' element={<Cast />} />
                    <Route path='reviews' element={ <Reviews/>} />
                </Route> */}
                <Route path='*' element={ <Home/>} />
            </Route>
        </Routes>
  )
}
 