import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_SCREENING } from "../../utils/mutations";
import { QUERY_CONTROL } from "../../utils/queries";

const Form = () => {
  const [formState, setFormState] = useState({
    control: "",
    symptoms: "noSymptom",
    contact: "no",
    positiveTest: "no",
    travel: "no",
  });
  // console.log(formState);

  const [addScreening] = useMutation(ADD_SCREENING);
  const { data: controlData } = useQuery(QUERY_CONTROL);
  console.log(controlData);
  //const { controls } = controlData;
  //console.log(controlData.controls);

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

  return (
    <div>
      <form onSubmit={handleScreeningSubmit}>
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
            {controlData ? (
              controlData.controls.map((control) => (
                <option value={control._id} key={control._id}>
                  By: {control.documentor}
                  {" ("}
                  {control.credentials}
                  {") conducted on "}
                  {control.dateTime}
                </option>
              ))
            ) : (
              <option>Loading</option>
            )}
            <option disabled selected defaultValue="">
              Select Control
            </option>
          </select>
        </div>
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
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
