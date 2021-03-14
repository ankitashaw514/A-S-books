import React, { useEffect ,useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { listBooks } from '../actions/bookActions';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addFavorite} from '../actions/favoriteActions';
import {FaHeart} from "react-icons/fa"

function BooksScreen(props){
 
  const bookList= useSelector(state=>state.bookList)
  
  const {books,loading,error}=bookList;
  const userfavorite =useSelector(state=>state.userfavorite);
 
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
const Favorite=()=>{
  dispatch(addFavorite(props.match.params.id));
 }
  
return (
  <div >

{loading? <div></div>:
        error? <div></div>:
  (
<div className="books">
           
 {
  books.map(book1 =>
    <div key={book1._id} className="book_card">
          <Link to={'/showBook/'+ book1._id}><img src={book1.image.url} alt="book"></img></Link>
          <div className="book_box">
           <div className="heart"><button style={{outline:'none',border:'none',background:"none"}} onClick={Favorite}>
             <FaHeart size="3rem" color="black" border="solid" border-color="red"
            /></button></div> 
          <div>
           <Link to={'/showBook/' + book1._id}><h2>{book1.name}</h2></Link>
           <li>{book1.author}</li>
           <li>{book1.discription}</li>
           <li>{book1.category}</li>
           <li>{book1.edition}</li>
          <span>Rs {book1.price}/-</span>
          </div>
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