import React from "react";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";
// import { idbPromise } from "../utils/helpers"

const Form = () => {
  const loggedIn = Auth.loggedIn();
  const { data: userData } = useQuery(QUERY_ME);

  return (
    <div className="container">
      {loggedIn && userData ? (
        <div>
          <h2>Your Forms</h2>
          <p>
            Welcome <span>{userData.me.username}</span>
          </p>
          <p>
            You are a <span>{userData.me.role}</span>
          </p>
          <p>
            Email: <span>{userData.me.email}</span>
          </p>
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
