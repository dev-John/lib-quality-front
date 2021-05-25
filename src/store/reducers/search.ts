import { updateObject } from "../../helpers";
import { IS_FETCHING } from "../actionTypes";

const initialState = {
  isFetching: false,
};

const searchReducer = (state: Object = initialState, action: any = {}) => {
  switch (action.type) {
    case IS_FETCHING:
      return updateObject(state, { isFetching: action.isFetching });

    default:
      return state;
  }
};

export default searchReducer;
