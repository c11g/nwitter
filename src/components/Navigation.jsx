import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">{userObj.displayName}'s Profile</Link>
  </nav>
);

export default Navigation;
