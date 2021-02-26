import React from 'react';

import {Link} from 'react-router-dom';
function HomeScreen(props){
return(
    <div className="home" style={{backgroundImage:`url(${'image/back.jpg'})`,
    backgroundRepeat:"no-repeat",height:"100vh", width:"100%",backgroundSize:"cover"}}>
        <div className="login-form-container1">
            <h1 style={{color:"#113857"}}>Abous Us</h1>
            
                <h3>Hey we are Ankita and Shweta!</h3>
                <h5>Welcome to our BookStore, A&S BookStore ...</h5>
                
                
                <p>This is basically a website where you can sold your old books 
                and as well as buy books according to your need at low prices.
                if you want to sell your books,
                you just need to add your books with it's full details in Add Book section
                as well as if you want to buy books go to Show Books section where you can find 
                books of various Categories.

                
               
            </p>
        </div>
        
        
        
    </div>
    
) 
            
}
export default HomeScreen;
