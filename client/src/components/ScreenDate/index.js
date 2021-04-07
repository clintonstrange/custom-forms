import React, { useState } from "react";
// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
import { Container, DatePicker } from "react-materialize";

const ScreenDate = () => {
  const [formState, setFormState] = useState({
    state: "March 30, 2021",
  });

  return (
    <Container>
      <p className="flow-text">{formState.state}</p>
      <DatePicker
        onChange={({ target: { value: date } }) => {
          setFormState({
            state: date,
          });
        }}
        value="March 30, 2021"
      />
    </Container>
  );
};

export default ScreenDate;
