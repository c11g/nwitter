import React, { useState } from "react";
import { firebaseRefer, authService } from "fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (hasAccount) {
        await authService.signInWithEmailAndPassword(email, password);
      } else {
        await authService.createUserWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setHasAccount((prev) => !prev);
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
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <button type="submit">
          {hasAccount ? "Sign In" : "Create Account"}
        </button>
      </form>
      <div>
        <button type="button" onClick={toggleAccount}>
          {hasAccount ? "Sign In" : "Create Account"}
        </button>
      </div>
      <div>
        <button name="google" type="button" onClick={onSocialClick}>
          Login with Google
        </button>
        <button name="github" type="button" onClick={onSocialClick}>
          Login with Github
        </button>
      </div>
      <div>{error}</div>
    </div>
  );
}

export default Auth;