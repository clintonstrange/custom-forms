import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import Form from "../components/Form";
// import { idbPromise } from "../utils/helpers"

const Landing = () => {
  const loggedIn = Auth.loggedIn();
  const { data: userData } = useQuery(QUERY_ME);

  return (
    <div className="container">
      {loggedIn && userData ? (
        <div>
          <p>
            Welcome <span>{userData.me.username}</span>
          </p>
          <p>
            Authorization: <span>{userData.me.role.toUpperCase()}</span>
          </p>
          <div>
            {userData.me.role === "admin" ? (
              <div>
                <Form />
              </div>
            ) : userData.me.role === "read/write" ? (
              <div>
                <Form />
              </div>
            ) : (
              <div>
                <p>
                  if logged in and user does not have admin or read/write
                  access, default to read only access
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h3>Please Login to Access your Forms!</h3>
      )}
    </div>
  );
};

export default Landing;
