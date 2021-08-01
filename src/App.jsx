// import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import AppContainer from './components/AppContainer';

import HomeView from './views/HomeView';

import MoviesView from './views/MoviesView';

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
