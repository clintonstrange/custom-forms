import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import Auth from "../../utils/auth";
// import { idbPromise } from "../utils/helpers"
import { useSelector } from "react-redux";

const Form = () => {
  //const [state] = useStoreContext();
  const state = useSelector((state) => state);
  const { role } = state;

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
      {Auth.loggedIn() ? (
        <div>
          <h2>Your Forms</h2>
          <p>
            Welcome <span>{role}</span>
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
