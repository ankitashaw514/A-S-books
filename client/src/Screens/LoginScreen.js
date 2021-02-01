

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { login } from '../actions/userActions';
function LoginScreen(props){
    
 
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const userLogin=useSelector(state=>state.userLogin);
    const {userInfo,loading,error}=userLogin;
 const dispatch=useDispatch();
 useEffect(()=>{
     if(userInfo){
         console.log(userInfo);
         props.history.push("/")
     }
     return ()=>{

     }

 },[userInfo])
 

  const submitHandler=(e)=>{
      e.preventDefault();
      dispatch(login(email,password));
      



  }

 
return(
    <div className="login-form" style={{backgroundImage:`url(${'image/back.jpg'})`,
    backgroundRepeat:"no-repeat",height:"100vh", width:"100%",backgroundSize:"cover"}}>
        <form onSubmit={submitHandler}>
            <ul className="login-form-container">
                    <h1>LOGIN</h1>
                    {loading && <div>Loding...</div>}
                    {error && <div>error</div>}
                <li>
                   
                
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                </li>
                <li>
                <button type="submit" className="btn-primary">Login</button>
                </li>
                <li>
                    New to A&S Books?
                </li>
                <li>
                    <Link to="/register" className="button full name text-center link" >Create your Account</Link>
                </li>
            </ul>

        </form>

    </div>

    
)
}
            

export default LoginScreen;