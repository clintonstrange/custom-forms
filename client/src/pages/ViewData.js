import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_CONTROL, QUERY_SCREENINGS } from "../utils/queries";
import { UPDATE_CONTROL, UPDATE_SCREENINGS } from "../utils/actions";
import Auth from "../utils/auth";
import { idbPromise } from "../utils/helpers";

function ViewData() {
  const [state, dispatch] = useStoreContext();
  const loggedIn = Auth.loggedIn();
  //const { loading, error, data } = useQuery(QUERY_SCREENINGS);
  // const controlId = data.screenings.map((screening) => screening.control.map((controls) => controls._id));

  const { loading: controlLoading, data: controlData } = useQuery(
    QUERY_CONTROL
  );
  const { loading: screeningLoading, error, data: screeningData } = useQuery(
    QUERY_SCREENINGS
  );

  useEffect(() => {
    if (controlData) {
      dispatch({
        type: UPDATE_CONTROL,
        control: controlData.controls,
      });
      controlData.controls.forEach((control) => {
        idbPromise("control", "put", control);
      });
    } else if (!controlLoading) {
      idbPromise("control", "get").then((controls) => {
        dispatch({
          type: UPDATE_CONTROL,
          control: controls,
        });
      });
    }
  }, [controlData, controlLoading, dispatch]);

  useEffect(() => {
    if (screeningData) {
      dispatch({
        type: UPDATE_SCREENINGS,
        screenings: screeningData,
      });
      screeningData.screenings.forEach((screening) => {
        idbPromise("screenings", "put", screening);
      });
    } else if (!screeningLoading) {
      idbPromise("screenings", "get").then((screenings) => {
        dispatch({
          type: UPDATE_SCREENINGS,
          screenings: screenings,
        });
      });
    }
  }, [screeningData, screeningLoading, dispatch]);

  console.log(state);

  // console.log(controlId);
  if (!screeningData) {
    return <div>No forms have been filled out.</div>;
  }
  if (screeningLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <div className="container">
      {loggedIn && (
        <div>
          <h2>Here are the different forms you've completed:</h2>
          <div className="row">
            {screeningData.screenings.map((info, index) => (
              <div className="col s12 m4" key={index}>
                <div className="card blue-grey darken-1" key={info._id}>
                  <div className="card-content white-text">
                    <span className="card-title">Screening Id: {info._id}</span>
                    <p>Patient symptoms: {info.symptoms}</p>
                    <p>Contact with others: {info.contact}</p>
                    <p>Positive covid test: {info.positiveTest}</p>
                    <p>Patient travelled: {info.travel}</p>
                    <div>
                      {info.control && (
                        <ul>
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
      )}
    </div>
  );
}

export default ViewData;
