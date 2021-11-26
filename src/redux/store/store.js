import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";




const initialState = {

}




const mainReducer = combineReducers({

})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);



export default configureStore;