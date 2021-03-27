import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import Auth from "../utils/auth";
// import { idbPromise } from "../utils/helpers"

const Form = () => {
  const [state, dispatch] = useStoreContext();


  //   useEffect(() => {
  //     async function getForms() {
  //       const cart = await idbPromise('forms', 'get');
  //       dispatch({ type: ADD_FORMS, forms: [...forms] });
  //     };

  //     if (!state.cart.length) {
  //       getCart();
  //     }
  //   }, [state.cart.length, dispatch]);

  console.log(state);
  return (
    <div className="container">
      <h2>Your Forms</h2>
      {Auth.loggedIn() &&
        <div>
          <p>Welcome <span>{state.role}</span></p>
        </div>
      }
      {state.role.admin &&
        <div>
          {state.role.admin}
          <p>This is an Admin</p>
        </div>
        // can add symptoms to a form
      }
      {state.role.manager &&
        <div>
          {state.role.manager}
          <p>This is a Manager</p>
        </div>
      }
      {
        <div>
          {state.role.director}
          <p>This is a Director</p>
        </div>
        // director can see the data but only has read privileges
      }
      <h3>
        <span role="img" aria-label="warning">
          ⚠️
          </span>
          Please Login!
      </h3>
    </div>
  );
};

export default Form;
