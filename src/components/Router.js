import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';

const Router = () => {
  const [isLogin, setIsLogin] = useState(!false);
  return <BrowserRouter>
    <Switch>
      {
        isLogin ? (<>
        <Route exact path="/">
          <Home />
        </Route>
        </>) : (
        <Route exact path="/">
          <Auth />
        </Route>
        )
      }
    </Switch>
  </BrowserRouter>
}

export default Router;