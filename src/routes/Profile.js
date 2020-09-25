import React from 'react';
import { useHistory } from "react-router-dom";
import { authService } from "fbase";

const Profile = () => {
  const history = useHistory();
  const onSignOut = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <div>
      <h1>Profile</h1>
      <button type="button" onClick={onSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Profile;