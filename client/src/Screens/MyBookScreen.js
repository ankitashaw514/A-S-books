import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteMyBook, getMyBook } from '../actions/myBookActions';
function MyBookScreen(props){
    const myBook =useSelector(state =>state.myBook);
    const deletedBook=useSelector(state=>state.myBookDelete);
    const {mybook,loading1,error1}=deletedBook;
    const {mybooks,loading,error}= myBook;
   const  dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getMyBook());
    
    },[mybook])

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
                 <Link to="/myBook/edit" style={{backgroundColor:'green',color:'white'}}>Edit</Link>
                 <Link onClick={()=>{
                   deleteBook(book._id)}}  style={{backgroundColor:'red',color:'white'}}>Delete</Link>
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