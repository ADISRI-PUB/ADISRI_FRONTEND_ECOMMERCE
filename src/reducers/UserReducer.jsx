import {USER_PROFILE_SUCCESS,USER_PROFILE_FAILED,USER_PROFILE_LOGOUT, USER_PROFILE_CREATION} from '../constants/UserConstants';


export const userReducer =(state={user:{}},action)=>{
         switch (action.type) {
            case USER_PROFILE_CREATION:
                return{
                    ...state,    
                }
            case USER_PROFILE_SUCCESS:  
            localStorage.setItem('token', JSON.stringify(action.payload.settoken));
            localStorage.setItem("profile", JSON.stringify(action.payload.setProfile));
            
                return{
                    ...state,
                    userprofile:action.payload.setProfile,
                    token:action.payload.settoken,
                }
            case USER_PROFILE_LOGOUT:
                    localStorage.removeItem("profile");
                    localStorage.removeItem("token");
                return {
                    ...state,
                    userprofile:{},
                    token:''
                }
            case USER_PROFILE_FAILED:
                return state
                
            default:
                return state
               
         }
}