import {
  GET_DEVELOPERS,
  ADD_DEVELOPER,
  DELETE_DEVELOPER,
  DEVELOPER_ERROR,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  developers: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVELOPERS:
      return {
        ...state,
        developers: action.payload,
        loading: false,
      };

    case ADD_DEVELOPER:
      return {
        developers: [action.payload, ...state.developers],
        loading: false,
      };

    case DELETE_DEVELOPER:
      return {
        ...state,
        developers: state.developers.filter(
          (developer) => developer.id !== action.payload
        ),
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case DEVELOPER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
