/* eslint-disable */
import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

const Signup = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  if (user === "Logged") {
    return <Redirect to={"/"} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://warehouse-api-backend.herokuapp.com/api/v1/register",
        {
          user: {
            username,
            password,
            password_confirmation
          }
        }
      );
      localStorage.setItem("token", JSON.stringify(data.headers.authorization));
      data.data.message === "Signed up sucessfully."
        ? setUser("Logged")
        : setUser("Not Logged");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">
          name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          placeholder="name"
          required
        />
        <label htmlFor="password">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <button type="submit">
          Sign up
        </button>
        <a href="/login">
          Log in
        </a>
      </form>
    </div>
  );
};

export default Signup;