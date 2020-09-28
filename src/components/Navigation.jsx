import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ userObj }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">{userObj.displayName}'s Profile</Link>
  </nav>
);

Navigation.propTypes = {
  userObj: PropTypes.object.isRequired
};

export default Navigation;
