import { recordConstants } from "../_constants";

const initialState = {
  post: null,
  filtered: null,
  current: null,
  loading: false,
  errors: {},
};

export const post = (state = initialState, action) => {
  switch (action.type) {
    case recordConstants.GET_RECORDS:
      return {
        ...state,
        records: action.records,
        loading: false,
      };
    case recordConstants.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
