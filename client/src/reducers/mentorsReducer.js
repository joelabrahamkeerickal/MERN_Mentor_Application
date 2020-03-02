import {
  CREATE_MENTOR,
  DELETE_MENTOR,
  GET_MENTORS,
  GET_MENTOR_DETAILS,
  FLUSH_MENTOR
} from "../actions/ActionTypes";

export const mentor = (state = null, action) => {
  switch (action.type) {
    case GET_MENTOR_DETAILS:
      return action.payload;
    case FLUSH_MENTOR:
      return null;
    default:
      return state;
  }
};

export const mentors = (state = [], action) => {
  switch (action.type) {
    case DELETE_MENTOR:
      return state.filter(mentor => mentor._id !== action.payload);
    case GET_MENTORS:
      return action.payload;

    default:
      return state;
  }
};
