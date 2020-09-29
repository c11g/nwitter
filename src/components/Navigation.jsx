import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./Navigation.module.scss";

const Navigation = ({ userObj }) => {
  const username = userObj.displayName || "user";
  return (
    <nav className={style.root}>
      <Link className={style.menu} to="/">Home</Link>
      <Link className={style.menu} to="/profile">{username}'s Profile</Link>
    </nav>
  );
}

Navigation.propTypes = {
  userObj: PropTypes.object.isRequired
};

export default Navigation;
