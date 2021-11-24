import {  RECEIVE_USER, SET_DATA, SHOW } from "../actions"
const initialstate ={
    show:false,
    record : [],
    data:{
        username:"",
        password:""
    }
}
const loginreducer = (state=initialstate,action)=>{
    switch(action.type){
        case RECEIVE_USER:
            return{
                ...state,
                record:action.user
            }
        case SET_DATA:
            return{
                ...state,
                data:action.payload
            }
 
        case SHOW:
            return{
                ...state,
                show : action.payload
            }
            default:
                return state;
    }
}
export default loginreducer