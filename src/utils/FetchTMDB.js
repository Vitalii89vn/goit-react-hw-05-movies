import axios from 'axios';

const API_KEY = 'c28a60c35f7c1f6eafdc45cc0b774d29';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function searchMovies(searchQuery) {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
    return response.data
};

export async function getTrendingToday() {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`)
    return response.data
};

export async function getFullInfoAboutMovie(movieId) {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`)
    return response.data
};

export async function getCastFromMovie(movieId) {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`)
    return response.data
};

export async function getReviewsFromMovie(movieId) {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`)
    return response.data
};