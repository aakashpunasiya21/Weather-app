import axios from "axios";
import { setweather } from "../actions";
export const requestweather =(city) =>{
    return async (dispatch) =>{
        const response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b69ce55d694ae5b501cd2d1cff10697`);
        dispatch(setweather(response.data));
    }
}