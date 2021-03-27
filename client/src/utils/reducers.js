//import { useReducer } from "react";
import { UPDATE_USER } from "./actions";

const initialState = {
  role: "",
  username: "",
  email: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        role: action.role,
        username: action.username,
        email: action.email,
      };
    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export default rootReducer;

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case UPDATE_USER:
//       return {
//         ...state,
//         role: action.role,
//         username: action.username,
//         email: action.email,
//       };
//     // if it's none of these actions, do not update state at all and keep things the same!
//     default:
//       return state;
//   }
// };

// export function useProductReducer(initialState) {
//   return useReducer(reducer, initialState);
// }
