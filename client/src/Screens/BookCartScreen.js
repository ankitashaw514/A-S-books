

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBook } from '../actions/bookActions';
import {addFavorite} from '../actions/favoriteActions'
function BookCartScreen(props){
 const bookDetails=useSelector(state=>state.bookDetails);
 const {book,loading,error}=bookDetails;
 const dispatch=useDispatch();
 
 useEffect(()=>{  
 
  dispatch(detailsBook(props.match.params.id));
  dispatch(addFavorite(props.match.params.id));
 
   return ()=>{
   };
 },[])
  
 
 



return(
  
    <div>
        {loading? <div>Loading...</div>:
        error? <div>error</div>:
        (
          <div key={book._id} className="book_details">
  
  
  
          <div className="box_details">
          
            <h2>{book.name}</h2>
            <p>{book.author}</p>
            <p>{book.edition}</p>
            <p>{book.discription}</p>
            <p>{book.category}</p>
            <span>Rs {book.price}/-</span>
          </div>
          <button >Add To Your Favourites</button>
          </div>
           

          )
        } 
    </div>
)
}
            

export default BookCartScreen;