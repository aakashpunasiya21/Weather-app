import {  LOGIN_PAGE, RECEIVE_USER, SET_DATA, SHOW } from "../actions"
const initialstate ={
    show:false,
    record : [],
    data:{
        username:"",
        password:""
    }
}
export default function loginreducer(state=initialstate,action){
    switch(action.type){
        case LOGIN_PAGE:
            return{
                ...state,
                show:action.payload
            };
        case SET_DATA:
            return{
                ...state,
                data:action.payload
            }
        default:
            return state;
}
}