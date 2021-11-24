import user from "../api/user";

export const SHOW ="SHOW";
export const RECEIVE_USER ="RECEIVE_USER";
export const SET_DATA ="SET_DATA";
export const LOGIN_PAGE ="LOGIN_PAGE";

export const showform = (payload) => ({type: "SHOW",payload})

export const getallusers = () =>(dispatch)=>{
    user.getUsers(user=>{
    dispatch(receiveUser(user))
    })
}
export const receiveUser =(user) =>{
    return{
        type:RECEIVE_USER,
        user
    }
}
export const setLogin =(payload) => {
    return{
        type : SET_DATA,
        payload
    }
}
export const logIn =(payload) =>(dispatch)=> {
    dispatch({
        type:LOGIN_PAGE,
        payload
    })
}