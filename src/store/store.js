import { createStore,applyMiddleware } from "redux";
import thunkredux from "redux-thunk";
import rootReducer from "../reducers";
const store = createStore(rootReducer,applyMiddleware(thunkredux));
export default store;