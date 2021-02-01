

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { addBook } from '../actions/bookActions';
function AddBookScreen(props){
    
    const [name,setName]= useState('');
    const [image,setImage]= useState('');
    const [author,setAuthor]= useState('');
    const [edition,setEdition]= useState('');
    const [discription,setDiscription]= useState('');
    const [category,setCategory]= useState('');
    const [price,setPrice]= useState('');
    const bookAdd=useSelector(state=>state.bookAdd);
    const {loading:loadingSave,success:successSave,error:errorSave}=bookAdd;
 const dispatch=useDispatch();
 useEffect(()=>{
     
       
     return ()=>{

     }

 },[])

  const submitHandler=(e)=>{
      e.preventDefault();
      console.log(image);
      const fd= new FormData();
      fd.append('image',image,image.name);
      fd.append('name',name)
      fd.append('author',author)
      fd.append('edition',edition)
      fd.append('discription',discription)
      fd.append('category',category)
      fd.append('price',price)
      dispatch(addBook(fd));
      



  }

 
return(
    <div className="login-form" style={{backgroundImage:`url(${'image/back.jpg'})`,
    backgroundRepeat:"no-repeat",height:"125vh", width:"100%",backgroundSize:"cover"}}>
        <form onSubmit={submitHandler}>
            <ul className="login-form-container">
                    <h1>ADD BOOK</h1>
                    {loadingSave && <div>Loding...</div>}
                    {errorSave && <div>error</div>}
                <li>
                   
                
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" name="name" id="name" onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </li>
                <li>
                   
                
                   <label htmlFor="image">
                       Image
                   </label>
                   <input type="file" name="image" id="image" onChange={(e)=>{
                       setImage(e.target.files[0])
                   }} />
               </li>
                <li>
                    <label htmlFor="author">
                        Author
                    </label>
                    <input type="text" name="author" id="author" onChange={(e)=>{
                        setAuthor(e.target.value)
                    }}/>
                </li>
                <li>
                   
                
                   <label htmlFor="edition">
                       Edition
                   </label>
                   <input type="text" name="edition" id="edition" onChange={(e)=>{
                       setEdition(e.target.value)
                   }}/>
               </li>
               <li>
                   
                
                   <label htmlFor="discription">
                       Discription
                   </label>
                   <textarea  name="discription" id="discription" onChange={(e)=>{
                       setDiscription(e.target.value)
                   }}/>
               </li>
               <li>
                   
                
                   <label htmlFor="category">
                      Select Book Category
                   </label>
                   <select name="category" id="category" onChange={(e)=>{
                   setCategory(e.target.value)}}>
                    <option value="religious">Religious</option>
                    <option value="drama">Drama</option>
                    <option value="fiction">Fiction</option>
                    <option value="story">Story</option>
                    <option value="business">Business</option>
                   </select>
                      
                   
               </li>
               <li>
                   
                
                   <label htmlFor="price">
                       Price
                   </label>
                   <input type="text" name="price" id="price" onChange={(e)=>{
                       setPrice(e.target.value)
                   }}/>
               </li>
                <li>
                <button type="submit" className="btn-primary ">Create</button>
                </li>
                
            </ul>

        </form>

    </div>

    
)
}
            

export default AddBookScreen;