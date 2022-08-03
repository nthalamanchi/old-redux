import { FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../action/Actiontypes";

const initialState={
    user:[],
    error:'',
    isLoading:false
}

const userReducer = (state=initialState,action)=>{
switch (action.type) {
    case FETCH_USERS_REQUEST:
        return{...state,isLoading:true}
    case FETCH_USERS_SUCCESS:
        return{user:action.data,isLoading:false,error:""}
    case FETCH_USERS_FAIL:
        return{error:"",user:[],isLoading:false}
    default:
        return state
}
}
export default userReducer