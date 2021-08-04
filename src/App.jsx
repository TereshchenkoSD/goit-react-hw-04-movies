import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar';
import AppContainer from './components/AppContainer';

import HomePage from './pages/HomePage';

import MoviesPage from './pages/MoviesPage';

import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  return (
    <AppContainer>
      <AppBar />
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
      </Switch>
    </AppContainer>
  );
};

export default App;
