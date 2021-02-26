

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBook } from '../actions/bookActions';
import {addFavorite} from '../actions/favoriteActions'

function BookCartScreen(props){
 const bookDetails=useSelector(state=>state.bookDetails);
 const userfavorite =useSelector(state=>state.userfavorite);
 const {favorite,loading2,error1}=userfavorite;
 
 const {loading,error,book}=bookDetails;
 const dispatch=useDispatch();
 
 useEffect(()=>{  
  dispatch(detailsBook(props.match.params.id));
  
   return ()=>{
   };
 },[])
 
 const Favorite=()=>{
  dispatch(addFavorite(props.match.params.id));
 }
 


 dispatch(detailsBook(props.match.params.id));
  
return(
  
    /*<div>
      {loading? <div>Loading...</div>:
        error? <div>error</div>:
        (
          <div key={book._id} className="book_details">
  
          <div className="book_details_image"><img src={book.image.url} alt="img1"></img></div>
  
          <div className="book_details_item">
          
            <h2>{book.name}</h2>
            <p>{book.author}</p>
            <p>{book.edition}</p>
            <p>{book.discription}</p>
            <p>{book.category}</p>
            <span>Rs {book.price}/-</span>
            <button onClick={Favorite}>Add To Your Favourites</button>
          {
            loading1?<div>Loading..</div>:
            error1?<div>error</div>:
            (<div>Added</div>)
          }
        
            
          </div>
          </div>
        )
        
         
    
}
    </div>
     )

        } */
        
        <div >

{loading? <div>Loading...</div>:
        error? <div></div>:
  (
<div className="books">
    <div key={book._id} className="book_card">
          <Link to={'/showBook/'+ book._id}><img src={book.image.url} alt="image"></img></Link>
          <div className="book_box">
           <Link to={'/showBook/' + book._id}><h2>{book.name}</h2></Link>
           
            <span>Rs {book.price}/-</span>
          </div>

    </div>
  )

          
</div>
)

}
</div>
            
)
}

export default BookCartScreen;