

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { detailsBook } from '../actions/bookActions';
function BookCartScreen(props){
  
 const bookDetails=useSelector(state=>state.bookDetails);
 const {book,loading,error}=bookDetails;
 const dispatch=useDispatch();
 useEffect(()=>{
  
   dispatch(detailsBook(props.match.params.id))
   
   
   return ()=>{
   };
 },[])
  
 
 

console.log(book);   

return(
  
    <div>
        {loading? <div>Loading...</div>:
        error? <div>error</div>:
        (
          <div className="details">
            
            <div className="details-info">
            <ul>
            <li>
              {book.name}
            </li> 
            <li>
              {book.author}
            </li>
            <li>
              {book.edition}
            </li>
            <li>
              {book.description}
            </li>
            <li>
              {book.category}
            </li>

          </ul>
            </div>
        </div>
           

          )
        } 
    </div>
)
}
            

export default BookCartScreen;