import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
// import { idbPromise } from "../utils/helpers"

const Landing = () => {
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
          <div className="container">
            <div className="btn">
              <h1><Link to="/Form">Fill Out Form</Link></h1>
            </div>
            <div>
              <h1><Link to="/Signup">Add User</Link></h1>
            </div>
            <div>
              <h1><Link to="/DataSheet">View Data</Link></h1>
            </div>
          </div>
        </div>
      }
      {state.role.manager &&
        <div>
          {state.role.manager}
          <p>This is a Manager</p>
          <div className="container">
            <div className="btn">
              <h1>Fill Out Form</h1>
            </div>
            {/* need to build out the functional logic for onClick */}
            <div>
              <h1>View Data</h1>
            </div>
          </div>
        </div>
      }
      {state.role.director &&
        <div>
          {state.role.director}
          <p>This is a Director</p>
          <div className="container">
            {/* need to build out the functional logic for onClick */}
            <div>
              <h1>View Data</h1>
            </div>
          </div>
          {/* // director can see the data but only has read privileges */}
        </div>
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

export default Landing;
