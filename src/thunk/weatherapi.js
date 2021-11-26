import axios from "axios";
import { setweather } from "../actions";
export const requestweather =(city) =>{
  console.log(city)
    return async (dispatch) =>{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b69ce55d694ae5b501cd2d1cff10697`);
        dispatch(setweather([response.data]));
        
        localStorage.setItem("city",JSON.stringify(response.data.name))
        localStorage.setItem("Country code",JSON.stringify(response.data.sys.country))
        localStorage.setItem("Weather",JSON.stringify(response.data.weather[0].description))
        localStorage.setItem("Wind speed",JSON.stringify(response.data.wind.speed))
        localStorage.setItem("Main (humidity)",JSON.stringify(response.data.main.humidity))

    }
}
export const comparename = () =>{

}
