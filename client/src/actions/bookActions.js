import axios from "axios";
import { BOOK_ADD_FAIL, BOOK_ADD_REQUEST, BOOK_ADD_SUCCESS, BOOK_DETAILS_FAIL, BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS, BOOK_LIST_FAIL,
     BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS } from "../constants/bookConstants"

const listBooks =() => async (dispatch)=>{
    try{
    dispatch({type:BOOK_LIST_REQUEST});
    
    const {data}=await axios.get('/addBook'
        
    );
    dispatch({type:BOOK_LIST_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:BOOK_LIST_FAIL,payload:error.message})
    }


}
const detailsBook = (bookId)=> async(dispatch)=>{
   try{
    dispatch({type:BOOK_DETAILS_REQUEST ,payload:bookId});
    
    
    const {data}=await axios.get('/addBook/'+bookId);
    
    dispatch({type:BOOK_DETAILS_SUCCESS, payload:data});
}
   catch(error){
    dispatch({type:BOOK_DETAILS_FAIL,payload:error.message});
   }
}

const addBook =(fd) => async (dispatch,getState)=>{
    try{
    dispatch({type:BOOK_ADD_REQUEST,payload:fd});
    const {
        userLogin: { userInfo }
    } = getState();

    const {data}=await axios.post('/addBook',fd,{
        headers: {
            Authorization:"Bearer" + userInfo.token
           }
    }
    
    );
    dispatch({type:BOOK_ADD_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:BOOK_ADD_FAIL,payload:error.message})
    }


}
export {listBooks,detailsBook,addBook};