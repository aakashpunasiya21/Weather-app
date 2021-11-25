export const LOGIN_PAGE='LOGIN_PAGE';
export const SET_DATA='SET_DATA';
export const SET_CITY='SET_CITY';
export const SET_WEATHER='SET_WEATHER'

export const login=(payload) =>{
    return {
        type:LOGIN_PAGE,
        payload
    }
}
export const setLogin=(payload)=>{
    return{
        type:SET_DATA,
        payload
    }
}
export const setcity =(payload) =>{
    return{
        type:SET_CITY,
        payload
    }
}
export const setweather =(payload) =>{
    return{
        type:SET_WEATHER,
        payload
    }
}