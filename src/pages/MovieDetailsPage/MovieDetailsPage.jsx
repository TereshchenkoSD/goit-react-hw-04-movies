import { useState, useEffect, lazy, Suspense } from 'react';

import {
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import { fetchMovieDetails } from '../../services/movies-api';

import {
  MovieTextBlock,
  MovieDataBlock,
  MovieTextBlockItem,
  MovieImg,
  MovieTextTitle,
  BtnGoBack,
} from './MovieDetailsPage.styles';

import Loader from '../../components/Loader';
const Cast = lazy(() => import('../Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "Reviews" */),
);

const MoviesDetailsPage = () => {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
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

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  console.log(movieId);
  return (
    <>
      <BtnGoBack type="button" onClick={onGoBack}>
        Go back
      </BtnGoBack>
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
      <hr />
      <h3>Additional Information:</h3>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state ? location.state.from : '/' },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state ? location.state.from : '/' },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/cast`} exact>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}/reviews`} exact>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
