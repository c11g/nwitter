import React, { useState } from "react";
import { authService } from "fbase";
import style from "./AuthForm.module.scss"

const AuthForm = () => {
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
  return (
    <div className={style.root}>
      <form onSubmit={onSubmit} className={style.form}>
        <input
          className={style.input}
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          className={style.input}
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <div className={style.error}>{error}</div>
        <button type="submit" className={style.submit}>
          {hasAccount ? "Sign In" : "Create Account"}
        </button>
      </form>
      <button type="button" onClick={toggleAccount} className={style.toggle}>
        {hasAccount ? "계정이 없으면 새로 만들어주세요." : "계정이 있으면 로그인해주세요."}
      </button>
    </div>
  )
}

export default AuthForm;