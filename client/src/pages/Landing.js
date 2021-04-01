import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import Form from "../components/Form";

const Landing = () => {
  const loggedIn = Auth.loggedIn();
  const { data: userData } = useQuery(QUERY_ME);

  return (
    <>
      <div className="fit">
        <div className="form-container">
          {loggedIn && userData ? (
            <div>
              <h3 className="center-align">COVID Screening Form</h3>
              <div>
                {userData?.me?.role === "admin" ? (
                  <div>
                    <Form />
                  </div>
                ) : userData?.me?.role === "read/write" ? (
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
            <div>Please Login to access your form!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Landing;
