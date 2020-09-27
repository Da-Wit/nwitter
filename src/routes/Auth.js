import { authService, firebaseInstance } from "Icebase";
import React, { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        // create account
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
        // log in
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          name="password"
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <div onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </div>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};
