import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';

export const APP = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                {/* <Route index element={<Layout />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/movies/:moveiId' element={<MovieDetails />}>
                    <Route path='cast' element={<Cast />} />
                    <Route path='reviews' element={ <Reviews/>} />
                 </Route> */}
                <Route path='*' element={ <Home/>} />
            </Route>
        </Routes>
    )
}

