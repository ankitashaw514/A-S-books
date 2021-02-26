
import axios from "axios";
import { MYBOOK_DELETE_FAIL, MYBOOK_DELETE_REQUEST, MYBOOK_DELETE_SUCCESS,
   MYBOOK_DETAILS_FAIL, MYBOOK_DETAILS_REQUEST, MYBOOK_DETAILS_SUCCESS } from "../constants/bookConstants";
const  getMyBook = ()=> async (dispatch,getState)=>{
    try{
      dispatch({type:MYBOOK_DETAILS_REQUEST});
      const {
        userLogin: { userInfo }
    } = getState();
      const {data}=await  axios.get('/myBook',{
        headers: {
          Authorization:"Bearer " + userInfo.token,
          User:userInfo._id
         }
      }); 
      dispatch({type:MYBOOK_DETAILS_SUCCESS,payload:data })
    }
    catch(error){
      dispatch({type:MYBOOK_DETAILS_FAIL,payload:error.message});  
    }
  }
  
  const  deleteMyBook = (bookId)=> async (dispatch,getState)=>{
    try{
      dispatch({type:MYBOOK_DELETE_REQUEST});
      const {
        userLogin: { userInfo }
    } = getState();
      const {data}=await  axios.delete('/addBook/'+bookId,{
        headers: {
          Authorization:"Bearer " + userInfo.token,
          User:userInfo._id
         }
      }); 
      dispatch({type:MYBOOK_DELETE_SUCCESS,payload:data })
    }
    catch(error){
      dispatch({type:MYBOOK_DELETE_FAIL,payload:error.message});  
    }
  }
  
  export {getMyBook,deleteMyBook};