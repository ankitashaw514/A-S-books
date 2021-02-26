

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../actions/bookActions';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddBookScreen(props){
    
    const [name,setName]= useState('');
    
    const [file,setFile]= useState('');
    const [author,setAuthor]= useState('');
    const [edition,setEdition]= useState('');
    const [discription,setDiscription]= useState('');
    const [category,setCategory]= useState('');
    const [price,setPrice]= useState('');
    const bookAdd=useSelector(state=>state.bookAdd);
    var {loading:loadingSave,success:successSave,error:errorSave}=bookAdd;
 const dispatch=useDispatch();
 useEffect(()=>{
     return ()=>{

     }

 },[])
 const MYLOGIN=()=>(
    
    <div className="notify" style={{color:"black"}}>
        Your Book is Successfully Added
    </div>
)
const notify=()=>{
    toast(<MYLOGIN/>,
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
const notification=async()=>{
    if(successSave){
        props.history.push("/")
          notify()
      }
      else if(errorSave)
       {
        props.history.push("/")
        notifyErr() 
       }
}

  const submitHandler = (e)=>{
      e.preventDefault();
      const fd = new FormData();
      fd.append("file",file)
      fd.append("name",name)
      fd.append("author",author)
      fd.append("edition",edition)
      fd.append("discription",discription)
      fd.append("category",category)
      fd.append("price",price)

      dispatch(addBook(fd));
      props.history.push("/")
          notify()
        
      
      
      
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
                   
                
                   <label htmlFor="file">
                       Image
                   </label>
                   <input type="file" name="file" id="file" onChange={(e)=>{
                       setFile(e.target.files[0])
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
                   <textarea type="text" name="discription" id="discription" onChange={(e)=>{
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