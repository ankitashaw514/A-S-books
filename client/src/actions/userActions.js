import axios from "axios";
import * as Cookie from "js-cookie";
import { USER_LOGIN_REQUEST,USER_LOGIN_FAIL,USER_LOGIN_SUCCESS, 
    USER_REGISTER_REQUEST, USER_REGISTER_FAIL ,USER_REGISTER_SUCCESS} from "../constants/userConstants";


const login =(email,password) => async (dispatch)=>{
    
    dispatch({type:USER_LOGIN_REQUEST,payload:{email,password}});
    
    try{
    const {data}=await axios.post("/profile/login",{email,password});
    dispatch({type:USER_LOGIN_SUCCESS,payload:data})
     Cookie.set("userInfo",JSON.stringify(data),{expires:7});
    }
    catch(error){
        dispatch({type:USER_LOGIN_FAIL,payload:error.message})
    }


}

const register =(name,email,password,number) => async (dispatch)=>{
    
    dispatch({type:USER_REGISTER_REQUEST,payload:{name,email,password,number}});
    try{
    const {data}=await axios.post("/profile/register",{name,email,password,number});
    dispatch({type:USER_REGISTER_SUCCESS,payload:data})
    Cookie.set("userInfo",JSON.stringify(data));
    }
    catch(error){
        dispatch({type:USER_REGISTER_FAIL,payload:error.message})
    }


}
export {login,register};