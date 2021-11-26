import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import homeReducers from "../reducers/homeReducers";
import albumReducers from "../reducers/albumReducers";
import artistReducers from "../reducers/artistReducers";
import songReducers from "../reducers/songReducers"



const mainReducer = combineReducers({
  home: homeReducers,
  album: albumReducers,
  artist: artistReducers,
  song: songReducers
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const configureStore = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk))
);



export default configureStore;