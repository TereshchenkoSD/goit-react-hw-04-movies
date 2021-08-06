import { useState, useEffect } from 'react';

import PageTitle from '../../components/PageTitle';

import { fetchTrendingMovies } from '../../services/movies-api';

import MoviesList from '../../components/MovieList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function onFetchTrendingMovies() {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(prevState => [...prevState, ...movies]);
      } catch (error) {
        console.log(error);
      }
    }

    onFetchTrendingMovies();
  }, []);

  return (
    <>
      <PageTitle text="Trending movies" />
      {trendingMovies && <MoviesList movies={trendingMovies} />}
    </>
  );
};

export default HomePage;
