import { useReducer } from "react";
import { UPDATE_CONTROL, UPDATE_SCREENINGS } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated control array
    case UPDATE_CONTROL:
      return {
        ...state,
        control: [...action.control],
      };
    // if action type value is the value of `UPDATE_SCREENINGS`, return a new state object with an updated screenings array
    case UPDATE_SCREENINGS:
      return {
        ...state,
        screenings: [...action.screenings],
      };
    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
