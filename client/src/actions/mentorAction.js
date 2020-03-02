import {
  CREATE_MENTOR,
  DELETE_MENTOR,
  GET_MENTORS,
  SHOW_ERROR,
  GET_MENTOR_DETAILS,
  UPDATE_MENTOR,
  FLUSH_MENTOR
} from "./ActionTypes";
import axios from "axios";

export const getMentors = () => dispatch => {
  axios.get(`/api/mentors`).then(res => {
    if (res.status == 200) {
      dispatch({ type: GET_MENTORS, payload: res.data });
    } else {
      dispatch({ type: SHOW_ERROR, payload: res.data });
    }
  });
};

export const getMentorDetails = id => dispatch => {
  axios.get(`/api/mentors/${id}`).then(res => {
    if (res !== null && res.status == 200) {
      dispatch({ type: GET_MENTOR_DETAILS, payload: res.data });
    } else {
      dispatch({ type: SHOW_ERROR, payload: "Could not fetch any data" });
    }
  });
};

export const flushMentor = () => dispatch => {
  dispatch({ type: FLUSH_MENTOR });
};

export const createMentor = mentor => dispatch => {
  axios.post(`/api/mentors/add`, mentor).then(res => {
    if (res.status == 200) {
      dispatch({ type: CREATE_MENTOR, payload: res.data });
      window.location.href = window.location.origin;
    } else {
      dispatch({ type: SHOW_ERROR, payload: res.data });
    }
  });
};

export const updateMentor = mentor => dispatch => {
  axios.post(`/api/mentors/${mentor._id}`, mentor).then(res => {
    if (res.status == 200) {
      dispatch({ type: UPDATE_MENTOR, payload: res.data });
      window.location.href = window.location.origin;
    } else {
      dispatch({ type: SHOW_ERROR, payload: res.data });
    }
  });
};

export const deleteMentor = mentorId => dispatch => {
  axios.delete(`/api/mentors/${mentorId}`).then(res => {
    if (res.status == 200) {
      dispatch({
        type: DELETE_MENTOR,
        payload: mentorId
      });
    } else {
      dispatch({ type: SHOW_ERROR, payload: res.data });
    }
  });
};
