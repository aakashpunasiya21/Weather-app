
 import _users from './user.json'

 const TIMEOUT = 100
 
 export default {
   getUsers: (cb, timeout) => setTimeout(() => cb(_users), timeout || TIMEOUT),
 
 }