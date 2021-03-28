import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";

function Nav() {
  const loggedIn = Auth.loggedIn();
  const { data: userData } = useQuery(QUERY_ME);

  function showNavigation() {
    if (loggedIn && userData) {
      return (
        <div className="container">
          <ul className="flex-row">
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
            <li>DATA RENDERING LINK HERE</li>
            {userData.me.role === "admin" ? (
              <div>
                <li className="mx-1">
                  <a href="/signup">Create Account</a>
                </li>
              </div>
            ) : null}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">Whatever Works 2.0</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
