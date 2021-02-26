import axios from "axios";
import {FAVORITE_ADD_FAIL, 
  FAVORITE_ADD_REQUEST, 
  FAVORITE_ADD_SUCCESS,
   FAVORITE_DETAILS_FAIL,
    FAVORITE_DETAILS_REQUEST,
     FAVORITE_DETAILS_SUCCESS } from "../constants/bookConstants";


const  addFavorite = (bookId)=> async (dispatch,getState)=>{
    try{
      dispatch({type:FAVORITE_ADD_REQUEST ,payload:bookId});
      const {
        userLogin: { userInfo }
    } = getState();
      const {data}=await  axios.post('/favorite/'+ bookId,{
        headers: {
          Authorization:"Bearer " + userInfo.token,
          User:userInfo._id
         }
      }); 
      dispatch({type:FAVORITE_ADD_SUCCESS,payload:data })
    }
    catch(error){
      dispatch({type:FAVORITE_ADD_FAIL,payload:error.message});  
    }
}

const  getFavorite = ()=> async (dispatch,getState)=>{
  try{
    dispatch({type:FAVORITE_DETAILS_REQUEST});
    const {
      userLogin: { userInfo }
  } = getState();
    const {data}=await  axios.get('/favorite',{
      headers: {
        Authorization:"Bearer " + userInfo.token,
        User:userInfo._id
       }
    }); 
    dispatch({type:FAVORITE_DETAILS_SUCCESS,payload:data })
  }
  catch(error){
    dispatch({type:FAVORITE_DETAILS_FAIL,payload:error.message});  
  }
}

export {addFavorite,getFavorite};