import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import {
  MovieGallery,
  MovieGalleryItem,
  MoviePosterWrapper,
  MovieTitle,
  MoviePoster,
} from './MovieList.styles';

import noPosterImage from '../../images/no-poster.png';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const moviePoster = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieGallery>
      {movies.map(({ id, poster_path, title }) => (
        <MovieGalleryItem key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            <MoviePosterWrapper>
              {poster_path ? (
                <MoviePoster src={`${moviePoster}${poster_path}`} alt={title} />
              ) : (
                <MoviePoster src={noPosterImage} alt={title} />
              )}
            </MoviePosterWrapper>
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </MovieGalleryItem>
      ))}
    </MovieGallery>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
