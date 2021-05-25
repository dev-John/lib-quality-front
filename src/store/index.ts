import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, combineReducers } from "redux";

import search from "./reducers/search";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default createStore(
  combineReducers({
    search,
  }),
  composedEnhancer
);
