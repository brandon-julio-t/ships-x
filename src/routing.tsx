import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './pages/detail';
import Favorites from './pages/favorites';
import List from './pages/list';
import Search from './pages/search';

function Routing() {return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <List />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
