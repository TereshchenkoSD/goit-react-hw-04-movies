import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import AppContainer from './components/AppContainer';

import HomeView from './pages/HomePage';

import MoviesView from './pages/MoviesPage';

const App = () => {
  return (
    <AppContainer>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/movies">
          <MoviesView />
        </Route>
      </Switch>
    </AppContainer>
  );
};

export default App;
