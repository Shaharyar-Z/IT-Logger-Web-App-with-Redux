import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
} from "../actions/types";

// Get Logs
export const getLogs = () => async (dispatch) => {
  try {
    // set loading true
    setLoading();
    // Fetch from Api
    const res = await fetch("/logs");
    const data = await res.json();
    // Dispatch
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Add Logs
export const addLog = (log) => async (dispatch) => {
  try {
    // set loading true
    setLoading();
    // Fetch from Api
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // Dispatch
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Delete Log
export const deleteLog = (id) => async (dispatch) => {
  try {
    // set loading true
    setLoading();
    // Fetch from Api
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });
    // Dispatch
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clear current log
export const clearLog = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
// Search Logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    // set loading true
    setLoading();
    // Fetch from Api
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    // Dispatch
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Update log
export const updateLog = (log) => async (dispatch) => {
  try {
    // set loading true
    setLoading();
    // Fetch from Api
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // Dispatch
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
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
