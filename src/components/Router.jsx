import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from "components/Navigation";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";

const Router = ({ isLogin, userObj, refreshUser }) => {
  return (
    <BrowserRouter>
      {isLogin && <Navigation userObj={userObj} />}
      <Switch>
        {isLogin ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth userObj={userObj} />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;