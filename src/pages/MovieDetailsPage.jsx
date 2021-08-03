import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieDetails } from '../services/movies-api';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function onFetchMovieDetails() {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    onFetchMovieDetails();
  }, [movieId]);

  console.log(movieId);
  return (
    <>
      <h1>Это страница с информацией по одному фильму</h1>

      {movie && (
        <>
          <img src={movie.backdrop_path} alt={movie.title} />

          <h3>{movie.title}</h3>
          <p>Popularity</p>
          <p>{movie.popularity}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
        </>
      )}
    </>
  );
};

export default MoviesDetailsPage;
