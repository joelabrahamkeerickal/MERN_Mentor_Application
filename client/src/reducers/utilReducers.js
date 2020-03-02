import { SHOW_ERROR } from "../actions/ActionTypes";

let intialState = {};

export const errors = (state = intialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
