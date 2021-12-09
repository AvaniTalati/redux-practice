import { FETCH_USERS_REQUESTS,FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from "axios"
export const fetchUserRequest =() =>{
    return{
        type:FETCH_USERS_REQUESTS
    }
}
export const fetchUserSuccess =(users) =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUserFailure =(error) =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response => {
             const users = response.data
             dispatch(fetchUserSuccess(users))
         })
         .catch(error=>{
             const errorMsg = error.message
             dispatch(fetchUserFailure(errorMsg))
         })
    }
}