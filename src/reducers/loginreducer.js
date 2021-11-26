import {  LOGIN_PAGE, SET_DATA } from "../actions"
const initialstate ={
    show:false,
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