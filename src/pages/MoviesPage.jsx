import { useState, useEffect } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';

import SearchBar from '../components/SearchBar';

import LoadMoreButton from '../components/LoadMoreButton';

import MoviesList from '../components/MovieList';

import { fetchMovies } from '../services/movies-api';

import Loader from '../components/Loader';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [reqStatus, setReqStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const showMovieList = movies.length > 19;

  useEffect(() => {
    if (location.search === '') return;

    const newQuery = new URLSearchParams(location.search).get('query');
    setQuery(newQuery);
  }, [location.search]);

  useEffect(() => {
    if (!query) {
      return;
    }
    setReqStatus('pending');

    async function onFetchMovies() {
      try {
        const movies = await fetchMovies(page, query);
        console.log(movies);
        setMovies(prevState => [...prevState, ...movies]);
        setReqStatus('resolved');
      } catch (error) {
        setReqStatus('rejected');
        setError(true);
      }
    }

    onFetchMovies();

    if (page > 1) {
      scrollPageToEnd();
    }
  }, [page, query]);

  const handleFormSubmit = newSearch => {
    if (newSearch.trim() === '') {
      toast.error('Invalid search query');
      return;
    }
    resetState();
    setQuery(newSearch);
    history.push({ ...location, search: `query=${newSearch}` });
  };

  const scrollPageToEnd = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  const onLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  const resetState = () => {
    setQuery(null);
    setPage(1);
    setMovies([]);
    setReqStatus('idle');
  };

  return (
    <>
      {error && toast.error('No such movies on the server!')}
      <SearchBar onSearch={handleFormSubmit} />
      {reqStatus === 'pending' && <Loader />}
      {movies && <MoviesList movies={movies} />}
      {showMovieList && <LoadMoreButton onClick={onLoadMoreBtn} />}
      <Toaster position="top-right" />
    </>
  );
};

export default MoviesPage;
