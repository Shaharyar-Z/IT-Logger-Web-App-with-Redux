import {
  GET_DEVELOPERS,
  ADD_DEVELOPER,
  DELETE_DEVELOPER,
  DEVELOPER_ERROR,
  SET_LOADING,
} from "./types";

// Get Logs
export const getDevelopers = () => async (dispatch) => {
  try {
    // set loading true
    setLoading();
    // Fetch from Api
    const res = await fetch("/developer");
    const data = await res.json();
    // Dispatch
    dispatch({
      type: GET_DEVELOPERS,
      payload: data,
    });
  } catch (err) {
    // console.error(err);
    dispatch({
      type: DEVELOPER_ERROR,
      payload: err.response.data,
    });
  }
};

// Add Developer
export const addDeveloper = (developer) => async (dispatch) => {
  try {
    // set loading true
    setLoading();
    // Fetch from Api
    const res = await fetch("/developer", {
      method: "POST",
      body: JSON.stringify(developer),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // Dispatch
    dispatch({
      type: ADD_DEVELOPER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DEVELOPER_ERROR,
      payload: err.response.data,
    });
  }
};

// Delete Log
export const deleteDeveloper = (id) => async (dispatch) => {
  try {
    // set loading true
    setLoading();
    // Fetch from Api
    await fetch(`/developer/${id}`, {
      method: "DELETE",
    });
    // Dispatch
    dispatch({
      type: DELETE_DEVELOPER,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: DEVELOPER_ERROR,
      payload: err.response.data,
    });
  }
};

// Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
