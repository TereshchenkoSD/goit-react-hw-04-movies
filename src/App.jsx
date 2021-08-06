import { Route, Switch } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import AppBar from './components/AppBar';

import AppContainer from './components/AppContainer';

import HomePage from './pages/HomePage/HomePage';

import MoviesPage from './pages/MoviesPage';

import MovieDetailsPage from './pages/MovieDetailsPage';

import NotFoundPage from './pages/NotFoundPage';

import Loader from './components/Loader';

const App = () => {
  return (
    <AppContainer>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </AppContainer>
  );
};

export default App;
