import React, { useEffect ,useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { listBooks } from '../actions/bookActions';
function BooksScreen(props){
 
  const bookList= useSelector(state=>state.bookList)
  const {books,loading,error}=bookList;
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(listBooks());
    return ()=>{
      
    };

  },[])
  
return (

  loading?<div>Loading...</div>:
  error?<div>{error}</div>:

<div style={{backgroundImage:`url(${'image/blue.png'})`,
    backgroundRepeat:"no-repeat",height:"100%", width:"100%",backgroundSize:"cover"}}>
            <ul className="login-form1">
            {
  books.map(book =>
    <li key={book.id}className="login-form-container1">
          <li><Link to={'/showBook/'+ book._id}><img src={book.image} alt="image"></img></Link></li>
           <li><Link to={'/showBook/' + book._id}>{book.name}</Link></li>
           <li>{book.author} </li>
           <li>{book.edition}</li>
            <li>{book.description}</li>
            <li>{book.category}</li>
            <li>Rs {book.price}/-</li>

    </li>
  )
}
            </ul>
</div>
)
}
            

export default BooksScreen;