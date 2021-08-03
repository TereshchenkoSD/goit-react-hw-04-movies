import { useState, useEffect } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import PageTitle from '../components/PageTitle';

import { fetchTrendingMovies } from '../services/movies-api';

const HomePage = () => {
  const { url } = useRouteMatch();
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
            <li key={tredingMovie.id}>
              <Link to={`${url}/${tredingMovie.id}`}>{tredingMovie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HomePage;
