import React from "react";
import { firebaseRefer, authService } from "fbase";
import AuthForm from "components/AuthForm";
import style from "./Auth.module.scss";

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
    <div className={style.root}>
      <AuthForm />
      <div className={style.buttons}>
        <button name="google" type="button" onClick={onSocialClick}
          className={style.button}
        >
          Sign In With Google
        </button>
        <button name="github" type="button" onClick={onSocialClick}
          className={style.button}
        >
          Sign In With Github
        </button>
      </div>
    </div>
  );
}

export default Auth;