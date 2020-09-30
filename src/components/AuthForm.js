import { authService } from "Icebase";
import React, { useState } from "react";
const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const { name, value } = event.target;
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
  return (
    <>
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
    </>
  );
};

export default AuthForm;
