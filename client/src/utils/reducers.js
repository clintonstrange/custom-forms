import { useReducer } from "react";



export const reducer = (state, action) => {
  switch (action.type) {
    
    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
