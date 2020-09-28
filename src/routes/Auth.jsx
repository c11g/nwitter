import React from "react";
import { firebaseRefer, authService } from "fbase";
import AuthForm from 'components/AuthForm';

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseRefer.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseRefer.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button name="google" type="button" onClick={onSocialClick}>
          Login with Google
        </button>
        <button name="github" type="button" onClick={onSocialClick}>
          Login with Github
        </button>
      </div>
    </div>
  );
}

export default Auth;