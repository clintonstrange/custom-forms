import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
//import { useStoreContext } from "../../utils/GlobalState";
import { ADD_SCREENING } from "../../utils/mutations";
import { QUERY_CONTROL } from "../../utils/queries";
//import { UPDATE_CONTROL, UPDATE_SCREENINGS } from "../../utils/actions";
import { DatePicker } from "react-materialize";
// import { idbPromise } from "../../utils/helpers";
import Materialize from "materialize-css";
import moment from "moment";

const Form = () => {
  //const [state, dispatch] = useStoreContext();

  const [formState, setFormState] = useState({
    control: "",
    symptoms: "noSymptom",
    contact: "no",
    positiveTest: "no",
    travel: "no",
    screenDate: "",
  });
  console.log(formState);

  const [addScreening] = useMutation(ADD_SCREENING);
  const { data: controlData } = useQuery(QUERY_CONTROL);
  // const { loading: screeningLoading, data: screeningData } = useQuery(
  //   QUERY_SCREENINGS
  // );
  // //console.log(controlData);
  // //const { controls } = controlData;
  // //console.log(controlData.controls);

  // useEffect(() => {
  //   if (controlData) {
  //     dispatch({
  //       type: UPDATE_CONTROL,
  //       control: controlData.controls,
  //     });
  //     controlData.controls.forEach((control) => {
  //       idbPromise("control", "put", control);
  //     });
  //   } else if (!controlLoading) {
  //     idbPromise("control", "get").then((controls) => {
  //       dispatch({
  //         type: UPDATE_CONTROL,
  //         control: controls,
  //       });
  //     });
  //   }
  // }, [controlData, controlLoading, dispatch]);

  // useEffect(() => {
  //   if (screeningData) {
  //     dispatch({
  //       type: UPDATE_SCREENINGS,
  //       screenings: screeningData,
  //     });
  //     screeningData.screenings.forEach((screening) => {
  //       idbPromise("screenings", "put", screening);
  //     });
  //   } else if (!screeningLoading) {
  //     idbPromise("screenings", "get").then((screenings) => {
  //       dispatch({
  //         type: UPDATE_SCREENINGS,
  //         screenings: screenings,
  //       });
  //     });
  //   }
  // }, [screeningData, screeningLoading, dispatch]);

  // console.log(state);

  const handleScreeningSubmit = async (event) => {
    event.preventDefault();
    try {
      await addScreening({
        variables: {
          control: formState.control,
          symptoms: formState.symptoms,
          contact: formState.contact,
          positiveTest: formState.positiveTest,
          travel: formState.travel,
          screenDate: formState.screenDate,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".datepicker");
    Materialize.DatePicker.getInstance(elems, {
      onSelect: function (date) {
        console.log("onSelect: " + date);
        setFormState({
          ...formState,
          screenDate: date,
        });
      },
    });
  });

  return (
    <div>
      <form onSubmit={handleScreeningSubmit}>
        <div className="form-margin">
          {/* screening date section */}
          <div>
            <DatePicker
              label="Screening Date"
              name="screenDate"
              id="screenDate"
              type="text"
              className="datepicker"
              value={formState.screenDate}
              onChange={(newDate) => {
                handleChange({
                  target: {
                    id: "screenDate",
                    name: "screenDate",
                    value: moment(newDate).format("MMMM DD, YYYY"),
                  },
                });
              }}
            />
          </div>
          {/* selecting the control */}
          <div>
            <label htmlFor="control">
              Please select Control for this Screen.
            </label>
            <select
              className="browser-default"
              name="control"
              type="select"
              id="control"
              onChange={handleChange}
            >
              <option disabled selected>
                Select Control
              </option>
              {controlData ? (
                controlData.controls.map((control) => (
                  <option value={control._id} key={control._id}>
                    {control.documentor}
                    {" ("}
                    {control.credentials}
                    {") "}
                  </option>
                ))
              ) : (
                <option>Loading</option>
              )}
            </select>
          </div>
          {/* symptoms */}
          <div>
            <label htmlFor="symptoms">
              Do you have any of the following symptoms?
            </label>
            <select
              className="browser-default"
              name="symptoms"
              type="select"
              id="symptoms"
              onChange={handleChange}
            >
              <option value="noSymptom">No Symptoms</option>
              <option value="cough">New and persistent cough</option>
              <option value="breath">
                Shortness of breath or any difficutlty breathing
              </option>
              <option value="fever">Fever</option>
            </select>
          </div>
          {/* have you been in contact */}
          <div>
            <label htmlFor="contact">
              Have you been in contact with anyone in the last 14 days who is
              experiencing these symptoms?
            </label>
            <select
              className="browser-default"
              name="contact"
              type="select"
              id="contact"
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {/* postitive contacts */}
          <div>
            <label htmlFor="positiveTest">
              Have you been in contact with anyone who has since tested positive
              for Covid-19?
            </label>
            <select
              className="browser-default"
              name="positiveTest"
              type="select"
              id="positiveTest"
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>
          {/* traveled */}
          <div>
            <label htmlFor="travel">
              Have you traveled abroad in the last 1-2 months?
            </label>
            <select
              className="browser-default"
              name="travel"
              type="select"
              id="travel"
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
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
  );
};

export default Form;
