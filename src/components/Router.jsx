import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import {DOMAIN_PATH_NAME} from "const";
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
            <Route exact path={`/${DOMAIN_PATH_NAME}`}>
              <Home userObj={userObj} />
            </Route>
            <Route exact path={`/${DOMAIN_PATH_NAME}/profile`}>
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <Route exact path={`/${DOMAIN_PATH_NAME}`}>
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