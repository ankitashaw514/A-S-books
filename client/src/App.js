
import React,{useState,useEffect} from "react"
import axios from "axios";


function App() {
  const [products, setProducts] = useState([]);
  /*useEffect(() => {
      axios.get('http://localhost:5000/api/product')
      .then((resp)=>{
        resp.json()
      })
      .then((result)=>{
        setProducts(result)
      });},[setProducts]);*/
        
  
      
    //setProducts([{"_id":"6003391849b05a081cb606c9","name":"ankita","description":"me","__v":0},{"_id":"60033948da7cf41d9097e59e","name":"ankita","description":"me","__v":0},{"_id":"600339dfe882b10ad8f40c9d","name":"ankita","description":"me","__v":0},{"_id":"60033aa3488cc816d8367b6e","name":"ankita","description":"me","__v":0},{"_id":"60033b3157f6442cb498d959","name":"ankita","description":"me","__v":0},{"_id":"60033bcc249630125477b743","name":"ankita","description":"me","__v":0},{"_id":"60033e550898d71b74fb785c","name":"ankita","description":"me","__v":0},{"_id":"60033ef945590417c4474788","name":"ankita","description":"me","__v":0},{"_id":"60034017bb979416b8ac2d5c","name":"ankita","description":"me","__v":0},{"_id":"60034071f486bf2e6861349a","name":"ankita","description":"me","__v":0},{"_id":"600340be617f0104886674ae","name":"ankita","description":"me","__v":0},{"_id":"60034113ea575a1a94de9462","name":"ankita","description":"me","__v":0},{"_id":"600341626c70e01bdcc19482","name":"ankita","description":"me","__v":0},{"_id":"6003416c6c70e01bdcc19483","name":"name","description":"description here","__v":0},{"_id":"600341826c70e01bdcc19484","name":"name","description":"description here","__v":0},{"_id":"6003419b6c70e01bdcc19485","name":"name","description":"description here","__v":0},{"_id":"600341cd48c73b2208b4fc9d","name":"ankita","description":"me","__v":0},{"_id":"600342373514072270ef59f5","name":"ankita","description":"me","__v":0},{"_id":"600342a01bf1e81170ae4658","name":"ankita","description":"me","__v":0},{"_id":"600343062c59181a34afdff2","name":"ankita","description":"me","__v":0},{"_id":"6003433d2c59181a34afdff3","name":"name","description":"description here","__v":0},{"_id":"6003464240ffa13218c1af67","name":"ankita","description":"me","__v":0},{"_id":"60034649cf2df63138fc24bb","name":"ankita","description":"me","__v":0},{"_id":"6003465177db252c9831406c","name":"ankita","description":"me","__v":0},{"_id":"600346913860d026e8651d52","name":"ankita","description":"me","__v":0},{"_id":"600346a03860d026e8651d53","name":"name","description":"description here","__v":0},{"_id":"6003475a21b99a19b8165cb7","name":"ankita","description":"me","__v":0},{"_id":"60034802eba7f111a03f9404","name":"ankita","description":"me","__v":0},{"_id":"6003482c0e1667222c24791d","name":"ankita","description":"me","__v":0},{"_id":"600348c00e1667222c24791e","name":"name","description":"description here","__v":0},{"_id":"600348e483a92a14ecf86d7b","name":"ankita","description":"me","__v":0},{"_id":"60034ac7300681050c36ae8a","name":"ankita","description":"me","__v":0},{"_id":"60034adcc9b92e184420430d","name":"ankita","description":"me","__v":0},{"_id":"60034b273f3d8309743c85af","name":"shweta","description":"not","__v":0},{"_id":"60034bfd3f339a21c85d05ff","name":"shweta","description":"not","__v":0},{"_id":"60034dcf6a293a1f80955f54","name":"shweta","description":"not","__v":0},{"_id":"60034e4b4d8434182408d342","name":"shweta","description":"not","__v":0},{"_id":"60034ee130e8cc1b5015ad5c","name":"shweta","description":"not","__v":0},{"_id":"60034ef530e8cc1b5015ad5d","name":"name","description":"description here","__v":0},{"_id":"60034f5430e8cc1b5015ad5e","name":"babita","description":"hello rahul","__v":0},{"_id":"60034f8924c8eb0a34fe352e","name":"shweta","description":"not","__v":0},{"_id":"60034f9824c8eb0a34fe352f","name":"bab","description":"hell","__v":0},{"_id":"60034fd1f9b6f61524d87508","name":"shweta","description":"not","__v":0},{"_id":"60034fdbf9b6f61524d87509","name":"bab","description":"hell","__v":0},{"_id":"6003513db501c72a900f95f5","name":"shweta","description":"not","__v":0},{"_id":"6003514eb501c72a900f95f6","name":"ooooo","description":"poooo","__v":0},{"_id":"60035269fc838111ec6dbce9","name":"shweta","description":"not","__v":0},{"_id":"600435ade271b72804044faf","name":"njmnhjkmn","description":"llllllllll","__v":0}]);
      
   axios({
     method:"GET",
     url:"http://localhost:5000/api/product",
     headers:{
       "Content-Type":"application/json"
     }
   }) 
   .then((res)=>{
    setProducts(res.data)
    console.log(res.data.message)
   });  
       
    
  return (
    <div className="App">
      <ul className="list">
        {
          products.map(product =>
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </li>
          )}
      </ul>
    </div>
  );

        }
export default App;
