import { combineReducers } from "redux";
import weather from "./dashbord"
import loginreducer from "./loginreducer"
export default combineReducers({
    loginreducer,
    weather,
})