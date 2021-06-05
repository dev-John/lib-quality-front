import { updateObject } from "../../helpers";
import { IS_FETCHING, SET_REPO_INFO } from "../actionTypes";

const initialState = {
  isFetching: false,
  repo: {
    openIssues: null,
    avgAge: null,
    stdAge: null,
  },
};

const searchReducer = (state: Object = initialState, action: any = {}) => {
  switch (action.type) {
    case IS_FETCHING:
      return updateObject(state, { isFetching: action.isFetching });
    case SET_REPO_INFO:
      return updateObject(state, { repo: action.payload.repoData });

    default:
      return state;
  }
};

export default searchReducer;
