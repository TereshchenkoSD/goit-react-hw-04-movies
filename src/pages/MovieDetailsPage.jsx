import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieDetails } from '../services/movies-api';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const moviePoster = 'https://image.tmdb.org/t/p/w500';

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
      <btn type="button">Go back</btn>
      {movie !== null && (
        <div>
          <img src={`${moviePoster}${movie.poster_path}`} alt={movie.title} />
          <div>
            <ul>
              <li>
                <b>Title:</b>
                <span>{movie.title}</span>
              </li>
              <li>
                <b>Popularity:</b>
                <span>{movie.popularity}</span>
              </li>
              <li>
                <b>Overview:</b>
                <span>{movie.overview}</span>
              </li>
              <li>
                <b>Genres:</b>
                <span>
                  {movie.genres.map(genre => {
                    return <span key={genre.id}>{genre.name} </span>;
                  })}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetailsPage;
