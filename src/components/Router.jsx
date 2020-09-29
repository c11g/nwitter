import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import {ROUTER_BASE_NAME} from "const";
import Navigation from "components/Navigation";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";

const Router = ({ isLogin, userObj, refreshUser }) => {
  return (
    <BrowserRouter basename={ROUTER_BASE_NAME}>
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
            <Auth />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  userObj: PropTypes.object,
  refreshUser: PropTypes.func.isRequired,
}

export default Router;