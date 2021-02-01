

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {feedback} from '../actions/feedBackActions';

import {Link} from 'react-router-dom';
function FeedbackScreen(props){
    
    const [name,setName]= useState('');
    
    const [pros,setPros]= useState('');
    const [cons,setCons]= useState('');
    const [rating,setRating]= useState('');
    

    const userFeedback=useSelector(state=>state.userFeedback);
    const {feed,loading,error}=userFeedback;
 const dispatch=useDispatch();
 useEffect(()=>{
     
    
     return ()=>{

     }

 },[])

  const submitHandler=(e)=>{
      e.preventDefault();
      dispatch(feedback(name,pros,cons,rating));
 } 
return(
    
    <div className="login-form" style={{backgroundImage:`url(${'image/back.jpg'})`,
    backgroundRepeat:"no-repeat",height:"100vh", width:"100%",backgroundSize:"cover"}}>
        
        <form onSubmit={submitHandler}>
            <ul className="login-form-container">
            <h1>Feedback</h1>
                    {loading && <div>Loding...</div>}
                    {error && <div>error</div>}
                <li>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" name="name" id="name" onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </li>
                <li>
                    <label htmlFor="pros">
                        Pros
                    </label>
                    <input type="text" name="pros" id="pros" onChange={(e)=>{
                        setPros(e.target.value)
                    }}/>
                </li>
                <li>
                    <label htmlFor="cons">
                        Cons
                    </label>
                    <input type="text" name="cons" id="cons" onChange={(e)=>{
                        setCons(e.target.value)
                    }}/>
                </li>
                <li>
                   
                
                    <label htmlFor="rating">
                        Rating
                    </label>
                    <select name="rating" id="rating" onChange={(e)=>{
                        setRating(e.target.value)
                    }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                </li>
                <li>
                <button type="submit" className="btn-primary">Submit</button>
                </li>
                
               
            </ul>

        </form>

    </div>

    
)
}
            

export default FeedbackScreen;