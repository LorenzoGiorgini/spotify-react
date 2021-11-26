import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import homeReducers from "../reducers/homeReducers";
import albumReducers from "../reducers/albumReducers";
import artistReducers from "../reducers/artistReducers";
import songReducers from "../reducers/songReducers";

const persistConfig = {
  key: "root",
  storage,
};

const mainReducer = combineReducers({
  home: homeReducers,
  album: albumReducers,
  artist: artistReducers,
  song: songReducers,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export default { store, persistor };
