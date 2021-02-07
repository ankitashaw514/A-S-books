import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {getFavorite} from '../actions/favoriteActions'
function FavoriteScreen(props){
    const favoriteBook =useSelector(state =>state.favoriteDetails);
    const {favorites,loading,error}= favoriteBook;
   const  dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getFavorite());
    
    },[])
    return (
        <div >
      
      {loading? <div></div>:
              error? <div></div>:
        (
      <div className="books" >
                 
       {
    favorites.map(book =>
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
export default FavoriteScreen;