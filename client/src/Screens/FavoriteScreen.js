import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getFavorite} from '../actions/favoriteActions'
import { toast} from 'react-toastify';
function FavoriteScreen(props){
    const favoriteBook =useSelector(state =>state.favoriteDetails);
    const {favorites,loading,error}= favoriteBook;
    const {userInfo}=useSelector(state=>state.userLogin);
   const  dispatch=useDispatch();
    useEffect(()=>{
      if(userInfo){
        dispatch(getFavorite());
        if(favorites==null){
          notify();
        }
      }
      else{
        notifyErr();
      }
      
       
    
    },[])

    const MYLOGIN=()=>(
    
      <div className="notify" style={{color:"black"}}>
          You Don't Have Any Favourite Books
      </div>
  )
  const notify=()=>{
      toast(<MYLOGIN/>,
      {position:toast.POSITION.TOP_CENTER,autoClose:1500}) 
  }
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