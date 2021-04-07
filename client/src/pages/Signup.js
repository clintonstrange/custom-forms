import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
// import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({
    email: "",
    role: "admin",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        role: formState.role,
      },
    });
    await setFormState({
      email: "",
      role: "admin",
      password: "",
    });
    event.target.reset();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className="fit login-parent">
        <div className="container my-1">
          <div id="card-custom-signup">
            <h2 className="center-align">Create Account</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="flex-row space-between my-2">
                <label htmlFor="email">Email:</label>
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="role">Select User Authorizaion</label>
                <select
                  className="browser-default"
                  name="role"
                  type="role"
                  id="role"
                  onChange={handleChange}
                >
                  <option value="admin">Admin</option>
                  <option value="read/write">Read/Write</option>
                  <option value="readOnly">Read Only</option>
                </select>
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
              <div className="flex-row flex-end center-align padding-top">
                <button
                  type="submit"
                  className="waves-effect waves-light btn blue darken-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
