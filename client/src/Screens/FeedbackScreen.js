

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {feedback} from '../actions/feedBackActions';

import {Link} from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FeedbackScreen(props){
    
    const [name,setName]= useState('');
    
    const [pros,setPros]= useState('');
    const [cons,setCons]= useState('');
    const [rating,setRating]= useState('');
    

    const userFeedback=useSelector(state=>state.userFeedback);
    const {feed,loading,error}=userFeedback;
    const {userInfo} =useSelector(state=>state.userLogin);
 const dispatch=useDispatch();

 useEffect(()=>{
     //if(userInfo){
         
         

     //}
     //else{
        
        // notifyErr();
     //}
     
     
    
     return ()=>{

     }

 },[])
 const MYLOGIN=()=>(
    
    <div className="notify" style={{color:"black"}}>
        Thank You For Your Valuable Feedback!
    </div>
)
const MYLOGIN1=()=>(
    
    <div className="notify" style={{color:"black"}}>
        You Already Submitted Your Feedback!
    </div>
)
const notify=()=>{
    toast(<MYLOGIN/>,
    {position:toast.POSITION.TOP_CENTER,autoClose:1500}) 
}
const notify1=()=>{
    toast(<MYLOGIN1/>,
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

  const submitHandler=(e)=>{
      e.preventDefault();
      dispatch(feedback(name,pros,cons,rating));
      /*if(feed){
        notify();
        props.history.push("/")
    
     }*/
     props.history.push("/")
      
      
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
                    <input type="text" name="name" id="name" required onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </li>
                <li>
                    <label htmlFor="pros">
                        Pros
                    </label>
                    <input type="text" name="pros" id="pros" required onChange={(e)=>{
                        setPros(e.target.value)
                    }}/>
                </li>
                <li>
                    <label htmlFor="cons">
                        Cons
                    </label>
                    <input type="text" name="cons" id="cons" required onChange={(e)=>{
                        setCons(e.target.value)
                    }}/>
                </li>
                <li>
                   
                
                    <label htmlFor="rating">
                        Rating
                    </label>
                    <select name="rating" id="rating" required onChange={(e)=>{
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