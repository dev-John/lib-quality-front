import { updateObject } from "../../helpers";
import {
  SET_FETCHING,
  SET_REPO_INFO,
  CLEAR_REPO_INFO,
  SET_ERROR_MESSAGE,
} from "../actionTypes";

const initialState = {
  isFetching: false,
  errorMsg: null,
  repo: {
    openIssues: null,
    avgAge: null,
    stdAge: null,
  },
};

const searchReducer = (state: Object = initialState, action: any = {}) => {
  switch (action.type) {
    case SET_FETCHING:
      return updateObject(state, { isFetching: action.payload.isFetching });
    case SET_ERROR_MESSAGE:
      return updateObject(state, { errorMsg: action.payload.errorMsg });
    case SET_REPO_INFO:
      return updateObject(state, { repo: action.payload.repoData });
    case CLEAR_REPO_INFO:
      return updateObject(state, initialState);

    default:
      return state;
  }
};

export default searchReducer;
