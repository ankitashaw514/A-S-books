import React from 'react';

import {Link} from 'react-router-dom';
function HomeScreen(props){
return(
    <div className="home" style={{backgroundImage:`url(${'image/back.jpg'})`,
    backgroundRepeat:"no-repeat",height:"100vh", width:"100%",backgroundSize:"cover"}}>
        <h1>About Us</h1>

        <h2>I am a web developer</h2>
        
    </div>
    
) 
            
}
export default HomeScreen;