import React, { useState } from 'react';
import { authService } from 'fbase';

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
    <>
    <form onSubmit={onSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
        required
      />
      <div>{error}</div>
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
        {hasAccount ? "계정이 없으면 새로 만들어주세요." : "계정이 있으면 로그인해주세요."}
      </button>
    </div>
    </>
  )
}

export default AuthForm;