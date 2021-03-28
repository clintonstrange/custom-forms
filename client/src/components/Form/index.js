import React from "react";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";
import { Link } from "react-router-dom";
// import { idbPromise } from "../utils/helpers"

const Form = () => {
  const loggedIn = Auth.loggedIn();
  const { data: userData } = useQuery(QUERY_ME);

  //const { username, role } = userData?.me;
  //   console.log(role);
  //   if (role === 'admin') {
  //       let admin = true;
  //   }

  return (
    <div className="container">
      {loggedIn && userData ? (
        <div>
          <h2>Your Forms</h2>
          <p>
            Welcome <span>{userData.me.username}</span>
          </p>
          <p>
            Authorization: <span>{userData.me.role.toUpperCase()}</span>
          </p>
          <div>
            {userData.me.role === "admin" ? (
              <div>
                <p>admin render Check</p>
                <Link to="/signup">
                  <button>Create Account</button>
                </Link>
              </div>
            ) : userData.me.role === "read/write" ? (
              <div>
                <p>read/write render check</p>
                <Link to="/signup">
                  <button>Create Account</button>
                </Link>
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
        //       <div>
        //         {state.role.admin ? (
        //         <div>
        //             <p>This is an Admin</p>
        //         </div>

        //     ) : (
        //         <div>
        //         {state.role.manager ? (
        //         <div>
        //             <p>This is an Manager</p>
        //         </div>
        //     )}) : (
        //         <div>
        //         {state.role.director ? (
        //         <div>
        //             <p>This is an Director</p>
        //         </div>
        //     ) : (
        //       <span>(log in to access your forms!)</span>
        //     )}
        //   </div>
        // </div>

        <h3>
          <span role="img" aria-label=""></span>
          Please Login to Access your Forms!
        </h3>
      )}
    </div>
  );
};

export default Form;
