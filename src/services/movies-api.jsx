import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'ded3826b3340bd4f9d9949b8c16eb633';

export async function fetchTrendingMovies() {
  const url = `/trending/all/day?api_key=${API_KEY}`;

  const response = await axios.get(url);
  return response.data.results;
}

export async function fetchMovies(page, query) {
  const url = `/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`;
  const response = await axios.get(url);

  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const url = `/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  const response = await axios.get(url);
  const movieData = await response.data;
  return movieData;
}

export function fetchMovieCredits(movieId) {
  const url = `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  const response = axios.get(url);
  return response.data;
}

export function fetchMovieReviews(movieId, page) {
  const url = `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`;

  const response = axios.get(url);
  return response.data;
}
