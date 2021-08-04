import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import {
  MovieGallery,
  MovieGalleryItem,
  MoviePosterWrapper,
  MovieTitle,
} from './MovieList.styles';

import noPosterImage from '../../images/no-poster.png';

const MovieList = ({ movies }) => {
  const moviePoster = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieGallery>
      {movies.map(({ id, poster_path, title }) => (
        <MovieGalleryItem key={id}>
          <Link to={`movies/${id}`}>
            <MoviePosterWrapper>
              {poster_path ? (
                <img src={`${moviePoster}${poster_path}`} alt={title} />
              ) : (
                <img src={noPosterImage} alt={title} />
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
