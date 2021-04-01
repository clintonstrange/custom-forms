import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME, QUERY_SCREENINGS } from "../utils/queries";
import Auth from "../utils/auth";

function ViewData() {
  const loggedIn = Auth.loggedIn();
  const { loading, error, data } = useQuery(QUERY_SCREENINGS);
  const { data: userData } = useQuery(QUERY_ME);

  if (!data) {
    return <div>No forms have been filled out.</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <>
      <div className="container">
        {loggedIn && userData ? (
          <div>
            <h2 className="center-align">Completed Forms:</h2>
            <div className="row">
              {console.log(JSON.stringify(data.screenings, null, 2))}
              {data.screenings.map((info, index) => (
                <div className="col s12 m4" key={index}>
                  <div className="card blue-grey darken-1" key={info._id}>
                    <div className="card-content white-text">
                      <span className="card-title">
                        Screening Id: {info._id}
                      </span>
                      <p>Symptoms: {info.symptoms}</p>
                      <p>Contact with others: {info.contact}</p>
                      <p>Positive covid test: {info.positiveTest}</p>
                      <p>International Travel: {info.travel}</p>
                      <div>
                        {info.control && (
                          <ul>
                            {console.log(info.control["_id"])}
                            <li>Controller ID: {info.control._id}</li>
                            <li>Documentor: {info.control.documentor}</li>
                            <li>Credentials: {info.control.credentials}</li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div> Please login to access your forms.</div>
        )}
      </div>
    </>
  );
}

export default ViewData;
