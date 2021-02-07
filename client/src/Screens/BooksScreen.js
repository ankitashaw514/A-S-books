import React, { useEffect ,useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { listBooks } from '../actions/bookActions';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BooksScreen(props){
 
  const bookList= useSelector(state=>state.bookList)
  const {books,loading,error}=bookList;
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(listBooks());
   
 if(error){
     props.history.push("/")
      notifyErr(); 
  }
    return ()=>{
      
    };

  },[])
  
const NOTLOGIN=()=>(
    
    <div className="notify" style={{color:"black"}}>
      You Are Not Logged In!
    </div>
)
const notifyErr=()=>{
    toast(<NOTLOGIN/>,
    {position:toast.POSITION.TOP_CENTER,autoClose:1500}) 
}

  
return (
  <div >

{loading? <div></div>:
        error? <div></div>:
  (
<div className="books" >
           
 {
  books.map(book =>
    <div key={book._id} className="book_card">
          <Link to={'showBook/'+ book._id}><img src={book.image.url} alt="image"></img></Link>
          <div className="book_box">
           <Link to={'showBook/' + book._id}><h2>{book.name}</h2></Link>
           
            <span>Rs {book.price}/-</span>
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
export default BooksScreen;