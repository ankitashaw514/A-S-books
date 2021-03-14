

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBook } from '../actions/bookActions';
import {addFavorite} from '../actions/favoriteActions'

function BookCartScreen(props){
 const bookDetails=useSelector(state=>state.bookDetails);
 const userfavorite =useSelector(state=>state.userfavorite);
 const {favorite,loading1,error1}=userfavorite;
 
 const {bookDetail,loading,error}=bookDetails;
 const dispatch=useDispatch();
 
 useEffect(()=>{  
  
  dispatch(detailsBook(props.match.params.id));
  
   return ()=>{
   };
 },[bookDetail])
 
 const Favorite=()=>{
  dispatch(addFavorite(props.match.params.id));
 }
 


 
 
 
return(
  
    <div>
       {
            loading?<div>Loading..</div>:
            error?<div>error</div>:
            
          (
          <div key={bookDetail._id} className="book_details">
  
          <img src={bookDetail.image.url}></img>
  
          <div className="book_details_item">
          
          <h2>{props.match.params.id}</h2>
            <h2>{bookDetail.name}</h2>
            <p>{bookDetail.author}</p>
            <p>{bookDetail.edition}</p>
            <p>{bookDetail.discription}</p>
            <p>{bookDetail.category}</p>
            <span>Rs {bookDetail.price}/-</span>
            <button onClick={Favorite}>Favorite</button>
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

      }
     
        
          
export default BookCartScreen;
