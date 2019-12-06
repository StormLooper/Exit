import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import location from "./location";
import tasksCompleted from "./tasksCompleted";
import buttons from "./buttons";
import clues from "./clues";

const reducer = combineReducers({ location, tasksCompleted, buttons, clues });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
  //createLogger({ collapsed: true })
);
const store = createStore(reducer, middleware);

export default store;
