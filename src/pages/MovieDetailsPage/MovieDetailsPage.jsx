import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieDetails } from '../../services/movies-api';

import {
  MovieTextBlock,
  MovieDataBlock,
  MovieTextBlockItem,
  MovieImg,
  MovieTextTitle,
} from './MovieDetailsPage.styles';

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
        <MovieDataBlock>
          <MovieImg
            src={`${moviePoster}${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieTextBlock>
            <ul>
              <MovieTextBlockItem>
                <MovieTextTitle>Title:</MovieTextTitle>
                <span>{movie.title}</span>
              </MovieTextBlockItem>
              <MovieTextBlockItem>
                <MovieTextTitle>Popularity:</MovieTextTitle>
                <span>{movie.popularity}</span>
              </MovieTextBlockItem>
              <MovieTextBlockItem>
                <MovieTextTitle>Overview:</MovieTextTitle>
                <span>{movie.overview}</span>
              </MovieTextBlockItem>
              <MovieTextBlockItem>
                <MovieTextTitle>Genres:</MovieTextTitle>
                <span>
                  {movie.genres.map(genre => {
                    return <span key={genre.id}>{genre.name} </span>;
                  })}
                </span>
              </MovieTextBlockItem>
            </ul>
          </MovieTextBlock>
        </MovieDataBlock>
      )}
    </>
  );
};

export default MoviesDetailsPage;
