import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import NewPost from './pages/NewPost';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/new" exact component={NewPost} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
