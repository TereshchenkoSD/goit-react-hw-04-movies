import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'ded3826b3340bd4f9d9949b8c16eb633';

async function fetchWithAxios(url = '', config = {}) {
  const response = await axios.get(url, config);

  return response.json();
}

export function fetchTrendingMovies() {
  return fetchWithAxios(`/trending/all/day?api_key=${API_KEY}`);
}

export function fetchMovies(page) {
  return fetchWithAxios(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`,
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithAxios(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

export function fetchMovieCredits(movieId) {
  return fetchWithAxios(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieReviews(movieId, page) {
  return fetchWithAxios(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
}
