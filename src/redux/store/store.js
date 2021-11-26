import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import homeReducers from "../reducers/homeReducers";
import artistReducers from "../reducers/artistReducers";
const mainReducer = combineReducers({
  home: homeReducers,
  artist: artistReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
