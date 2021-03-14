
import React, {  useEffect, useState } from 'react';
import { BrowserRouter, Route,Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen'
import BooksScreen from './Screens/BooksScreen';
import BookCartScreen from './Screens/BookCartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import AddBookScreen from './Screens/AddBookScreen';
import FeedBackScreen from './Screens/FeedbackScreen';
import FavoriteScreen from './Screens/FavoriteScreen'
import MyBookEditScreen from './Screens/MyBookEditScreen'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "./actions/userActions"
import  * as Cookie from 'js-cookie'
import './App.css';
import {FaFacebook,FaTwitter,FaYoutube,FaLinkedin} from "react-icons/fa"
import MyBookScreen from './Screens/MyBookScreen';

function App(props){
   
    const[toggle,setToggle]=useState(false);
    
    const userLogin=useSelector(state=>state.userLogin);
    const userLogout=useSelector(state=>state.userLogout);
    const {logoutInfo}=userLogout;
    const  {userInfo} = userLogin;
    const  dispatch=useDispatch();

    const openMenu=()=>{
        setToggle(true);
    
       }
       
   const closeMenu=()=>{
   setToggle(false);
   }
   
    const logout1=()=>{
       dispatch(logout());
       
    }
   
   
  
  
return (
<BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="name">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/"></Link>
                    <Link to="#">A&S BookStore</Link>
                </div>
                    <div className="profile">
                    {
                        (userInfo)?
                    <div>
                        <button>{userInfo.name} /</button>  
                        <button onClick={logout1}>Logout</button>
</div>
                        :
                        
        
                        <Link to="/login">Login</Link>
                        
                        
                    }
                   
                    
                </div>
                
               
             
                
            </header>
            {toggle && 
             <aside  className="sidebar" id="sidebar1">
                
             <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                 <h4 style={{color:"white"}}>Categories</h4>
                 <ul>
                     <li>
                         <Link to="/" onClick={closeMenu}>Home</Link>
                     </li>
                     <li>
                         <Link to="/showBooks" onClick={closeMenu}>Show Books</Link>
                     </li>
                     <li>
                         <Link to="/addBook" onClick={closeMenu}>Add Books</Link>
                     </li>
                     <li>
                         <Link to="/myBook" onClick={closeMenu}>My Books</Link>
                     </li>
                     <li>
                         <Link to="/myFavorite" onClick={closeMenu}>My Favourites</Link>
                     </li>
                     <li>
                         <Link to="/feedback" onClick={closeMenu}>Feedback</Link>
                     </li>
                     <li>

                     </li>
                     <li>

                     </li>
                     </ul>
                <div className="follow">Follow Me
                <li><Link><FaFacebook size="3rem" color="#3B5998"/></Link></li>        
                 <li><Link><FaTwitter size="3rem" color="08a0e9"/> </Link></li>       
                 <li><Link><FaLinkedin size="3rem" color="0077B5"/></Link></li>
                 
                </div>
             </aside>
            }

            
           
           
            <main className="main">
              <div className="content">
              <Route path="/login"  component={LoginScreen}/>
              <Route path="/register"  component={RegisterScreen}/>
              <Route path="/addbook"  component={AddBookScreen}/>
              <Route path="/feedback" component={FeedBackScreen}/>
                <Route path="/myfavorite" component={FavoriteScreen}/>
                <Route path="/showBooks" component={BooksScreen}/>
                <Route path="/showBook/:id" component={BookCartScreen}/>
                <Route path="/" exact={true} component={HomeScreen}/>
                <Route path="/myBook" component={MyBookScreen}/>
                <Route path="/myBooks/edit/:id" component={MyBookEditScreen}/>


                
                
                
              </div>
            </main>
            
        
        </div>
        
  </BrowserRouter>
)
}
export default App;
