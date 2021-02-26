

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { register } from '../actions/userActions';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RegisterScreen(props){
    
    const [name,setName]= useState('');
    
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [number,setNumber]= useState('');
    

    const userRegister=useSelector(state=>state.userRegister);
    const {userInfo,loading,error}=userRegister;
 const dispatch=useDispatch();
 useEffect(()=>{
    if(userInfo){

        props.history.push("/")
        notify();
    }
    else if(error){
       props.history.push("/")
        notifyErr(); 
    }
     return ()=>{

     }

 },[userInfo])
 const MYLOGIN=()=>(
    
    <div className="notify" style={{color:"black"}}>
        Welcome To A&S Books
    </div>
)
const notify=()=>{
    toast(<MYLOGIN/>,
    {position:toast.POSITION.TOP_CENTER,autoClose:1500}) 
}
const NOTLOGIN=()=>(
    
    <div className="notify" style={{color:"black"}}>
        Fill The Data Correctly!
    </div>
)
const notifyErr=()=>{
    toast(<NOTLOGIN/>,
    {position:toast.POSITION.TOP_CENTER,autoClose:1500}) 
}

  const submitHandler=(e)=>{
      e.preventDefault();
      dispatch(register(name,email,password,number));
}

 
return(
    <div className="login-form" style={{backgroundImage:`url(${'image/back.jpg'})`,
    backgroundRepeat:"no-repeat",height:"100vh", width:"100%",backgroundSize:"cover"}}>
        <form onSubmit={submitHandler}>
            <ul className="login-form-container">
                    <h1>REGISTER</h1>
                <li>
                
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" name="name" id="name" required onChange={(e)=>{
                   
                        setName(e.target.value)
                    }}/>
                </li>
                <li>
                   
                
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" required onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" required onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                </li>
                <li>
                   
                
                    <label htmlFor="number">
                        Number
                    </label>
                    <input type="number" name="number" id="number" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onChange={(e)=>{
                        setNumber(e.target.value)
                    }}/>
                </li>
                <li>
                <button type="submit" className="btn-primary">Register</button>
                </li>
                
                <li>
                   Already have an account? <Link to="/login" className="button full name text-center link">Login</Link>
                </li>
            </ul>

        </form>

    </div>

    
)
}
            

export default RegisterScreen;