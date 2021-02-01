
import React, { useState } from 'react';
import { BrowserRouter, Route,Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen'
import BooksScreen from './Screens/BooksScreen';
import BookCartScreen from './Screens/BookCartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import AddBookScreen from './Screens/AddBookScreen';
import FeedBackScreen from './Screens/FeedbackScreen';
import { useSelector } from 'react-redux';


function App(props){
    const[toggle,setToggle]=useState(false);
    const userLogin=useSelector(state=>state.userLogin);
    const {userInfo}=userLogin;
    const openMenu=()=>{
        setToggle(true);
       }
   const closeMenu=()=>{
   setToggle(false);
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
                    <Link to="#"style={{hover:"none"}}>A&S Books</Link>
                </div>
                <div className="profile">
                    {
                        userInfo ? <h3>{userInfo.name}</h3>:
                        <Link to="/login">Login</Link>
                    }
                    
                    
                </div>
                
            </header>
            {toggle && 
             <aside  className="sidebar" id="sidebar1">
                
             <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                 <h4 style={{color:"#cf988a"}}>Categories</h4>
                 <ul>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/showBooks">Show Books</Link>
                     </li>
                     <li>
                         <Link to="/addBook">Add Books</Link>
                     </li>
                     <li>
                         <Link to="/myBook">My Books</Link>
                     </li>
                     <li>
                         <Link to="/myFavorite">My Favourites</Link>
                     </li>
                     <li>
                         <Link to="/feedback">Feedback</Link>
                     </li>
                 </ul>
 
             </aside>
            }
           
            <main className="main">
              <div className="content">
              <Route path="/login"  component={LoginScreen}/>
              <Route path="/register"  component={RegisterScreen}/>
              <Route path="/addbook"  component={AddBookScreen}/>
              <Route path="/feedback" component={FeedBackScreen}/>

                <Route path="/showBooks" component={BooksScreen}/>
                <Route path="/showBook/:id" component={BookCartScreen}/>
                <Route path="/" exact={true} component={HomeScreen}/>
                
                
                
              </div>
            </main>
            
        
        </div>
        
  </BrowserRouter>
)
}
export default App;
