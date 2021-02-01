

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { register } from '../actions/userActions';
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
     }
     return ()=>{

     }

 },[userInfo])

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
                   
                
                    <label htmlFor="number">
                        Number
                    </label>
                    <input type="number" name="number" id="number" onChange={(e)=>{
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