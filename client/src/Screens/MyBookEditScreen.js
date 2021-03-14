

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../actions/myBookActions';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyBookEditScreen(props){
    const myBook =useSelector(state=>state.myBook);
    const {mybooks}=myBook;
    const bookedit=mybooks.filter(x=>(x._id===props.match.params.id));
    const [name,setName]= useState(bookedit[0].name);
    
    
    const [author,setAuthor]= useState(bookedit[0].author);
    const [edition,setEdition]= useState(bookedit[0].edition);
    const [discription,setDiscription]= useState(bookedit[0].discription);
    const [category,setCategory]= useState(bookedit[0].category);
    const [price,setPrice]= useState(bookedit[0].price);
    const bookEdit=useSelector(state=>state.bookEdit);
    const {editbook,loading,error}=bookEdit;
    
    
 const dispatch=useDispatch();
 useEffect(()=>{
    
     return ()=>{

     }

 },[])
 const MYLOGIN=()=>(
    
    <div className="notify" style={{color:"black"}}>
        Your Book is Successfully Editted
    </div>
)
const notify=()=>{
    toast(<MYLOGIN/>,
    {position:toast.POSITION.TOP_CENTER,autoClose:1500}) 
}
const NOTLOGIN=()=>(
    
    <div className="notify" style={{color:"black"}}>
        You Can't Edit The Book
    </div>
)
const notifyErr=()=>{
    toast(<NOTLOGIN/>,
    {position:toast.POSITION.TOP_CENTER,autoClose:1500}) 
}

  const submitHandler = (e)=>{
      e.preventDefault();
      const fd = new FormData();
      
      fd.append("name",name)
      fd.append("author",author)
      fd.append("edition",edition)
      fd.append("discription",discription)
      fd.append("category",category)
      fd.append("price",price)
    dispatch(editBook(props.match.params.id,fd));
      
      
        
      
      
      
}

 
return(
    <div className="login-form" style={{backgroundImage:`url(${'image/back.jpg'})`,
    backgroundRepeat:"no-repeat",height:"125vh", width:"100%",backgroundSize:"cover"}}>
        <form onSubmit={submitHandler}>
            <ul className="login-form-container">
                    <h1>EDIT BOOK</h1>
                   
                <li>
                   
                
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" name="name" id="name" value={name}  onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </li>
                
                <li>
                    <label htmlFor="author">
                        Author
                    </label>
                    <input type="text" name="author" id="author" value={author} onChange={(e)=>{
                        setAuthor(e.target.value)
                    }}/>
                </li>
                <li>
                   
                
                   <label htmlFor="edition">
                       Edition
                   </label>
                   <input type="text" name="edition" id="edition" value={edition}  onChange={(e)=>{
                       setEdition(e.target.value)
                   }}/>
               </li>
               <li>
                   
                
                   <label htmlFor="discription">
                       Discription
                   </label>
                   <textarea type="text" name="discription" id="discription" value={discription} onChange={(e)=>{
                       setDiscription(e.target.value)
                   }}/>
               </li>
               <li>
                   
                
                   <label htmlFor="category">
                      Select Book Category
                   </label>
                   <select name="category" id="category" value={category} onChange={(e)=>{
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
                   <input type="text" name="price" id="price" value={price} onChange={(e)=>{
                       setPrice(e.target.value)
                   }}/>
               </li>
                <li>
                <button type="submit" className="btn-primary ">Save</button>
                </li>
                
            </ul>

        </form>

    </div>

    
)
}
            

export default MyBookEditScreen;