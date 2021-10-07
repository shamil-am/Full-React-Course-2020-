import * as actionTypes from "./actionTypes";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNT:
      return state + action.payload;
    case actionTypes.DECREASE_COUNT:
      return state - action.payload;
    default:
      return state;
  }
};
