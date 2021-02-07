import axios from "axios"


import { FEEDBACK_SAVE_FAIL, FEEDBACK_SAVE_REQUEST, FEEDBACK_SAVE_SUCCESS } from "../constants/feedBackConstants";
const feedback =(name,pros,cons,rating) => async (dispatch,getState)=>{
    try{
    dispatch({type:FEEDBACK_SAVE_REQUEST,payload:{name,pros,cons,rating}});
    
    const {
        userLogin: { userInfo }
    } = getState();
    
    const {data}=await axios.post("/feedback",{name,pros,cons,rating},{
        headers: {
         Authorization:"Bearer" + userInfo.token
        }
})

    dispatch({type:FEEDBACK_SAVE_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:FEEDBACK_SAVE_FAIL,payload:error.message})
    }


}
export {feedback};