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
      {Auth.loggedIn() ? (
        <div>
          <p>Welcome <span>{state.role}</span></p>
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
          <span role="img" aria-label="warning">
            ⚠️
          </span>
          Please Login!
        </h3>
      )}
    </div>
  );
};

export default Form;
