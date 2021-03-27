import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
//import { useStoreContext } from "../utils/GlobalState";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import { UPDATE_USER } from "../utils/actions";
import Auth from "../utils/auth";

function Login(props) {
  //const [state, dispatch] = useStoreContext();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  console.log(formState);
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      const user = mutationResponse.data.login.user;
      console.log(mutationResponse.data);
      if (user) {
        dispatch({
          type: UPDATE_USER,
          role: user.role,
          username: user.username,
          email: user.email,
        });
      }
      console.log(state);
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, "NAME");
    console.log(value, "VALUE");
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">← Create Account</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
