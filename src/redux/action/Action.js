import { BUY_LAPTOP, BUY_MOBILE, FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Actiontypes"
import axios from 'axios'

export const buyLaptop = ()=>{
    return {
        type:BUY_LAPTOP
    }
}
export const buyMobile = ()=>{
    return {
        type:BUY_MOBILE
    }
}

export const fetchUsersRequest = ()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = ()=>{
    return {
        type:FETCH_USERS_SUCCESS
    }
}

export const fetchUsersFail = ()=>{
    return {
        type:FETCH_USERS_FAIL
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
          dispatch(fetchUsersRequest())
          axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            let users = response.data
            dispatch(fetchUsersSuccess(users))
          }).catch(error=>{
            dispatch(fetchUsersFail(error))
          })

    }
}