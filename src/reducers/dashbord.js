import { SET_CITY, SET_WEATHER } from "../actions";
const initialState = {
  api: [],
  city: '',
}
export default function weather(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload
       
      }
      
    case SET_WEATHER:
      return {
        ...state,
        api: action.payload
      }
    default:
      return state
  }
}