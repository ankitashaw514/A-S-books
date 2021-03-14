import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { toast} from 'react-toastify';
import {FaEdit,FaBeer} from "react-icons/fa"

import { deleteMyBook, getMyBook } from '../actions/myBookActions';
function MyBookScreen(props){
    const myBook =useSelector(state =>state.myBook);
    const deletedBook=useSelector(state=>state.myBookDelete);
    const {mybook,loading1,error1}=deletedBook;
    const {mybooks,loading,error}= myBook;
    const  { userInfo }
  =useSelector(state=>state.userLogin);

   const  dispatch=useDispatch();
    useEffect(()=>{
      if(userInfo){
        dispatch(getMyBook());
        
          
        
        
    }
    else{
      notifyErr();
    }
    
    },[])


    const MYLOGIN=()=>(
    
      <div className="notify" style={{color:"black"}}>
          You Have Not Added Any  Books Yet!
      </div>
  )
  const notify=()=>{
      toast(<MYLOGIN/>,
      {position:toast.POSITION.TOP_CENTER,autoClose:2000}) 
  }
  const NOTLOGIN=()=>(
      
      <div className="notify" style={{color:"black"}}>
          You Are Not Logged In!
      </div>
  )
  const notifyErr=()=>{
      toast(<NOTLOGIN/>,
      {position:toast.POSITION.TOP_CENTER,autoClose:2000}) 
  }
  

    const deleteBook=(bookId)=>{
        dispatch(deleteMyBook(bookId));
    }
    return (
        <div >
      
      {loading? <div></div>:
              error? <div></div>:
        (
      <div className="books" >
                 
       {
    mybooks.map(book =>
          <div key={book._id} className="book_card">
                <img src={book.image.url} alt="image"></img>
                <div className="book_box">
                <h2>{book.name}</h2>
                 <span>Rs {book.price}/-</span>
                 <Link to={"/myBooks/edit/"+book._id} style={{backgroundColor:'green',color:'white'}}>Edit</Link>
                 <Link onClick={()=>{
                   deleteBook(book._id)}}  style={{backgroundColor:"#2a506e7e",color:'white'}}>Delete</Link>
          </div>
      
          </div>
        )
      }
                
      </div>
      )
      
      }
      </div>
                  
      )
}
export default MyBookScreen;