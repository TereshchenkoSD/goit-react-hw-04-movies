import { useState, useEffect } from 'react';

import PageTitle from '../components/PageTitle';

import { fetchTrendingMovies } from '../services/movies-api';

const HomeView = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function onFetchTrendingMovies() {
      try {
        const movies = await fetchTrendingMovies();
        console.log(movies);
        setTrendingMovies(prevState => [...prevState, ...movies]);
      } catch (error) {
        // setError(true);
      }
    }

    onFetchTrendingMovies();
  }, []);
  return (
    <>
      <PageTitle text="Trending movies" />

      {trendingMovies && (
        <ul>
          {trendingMovies.map(tredingMovie => (
            <li key={tredingMovie.id}>{tredingMovie.original_title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HomeView;
