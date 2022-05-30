import React, {useEffect} from "react";
import Products from "./components/Products";
import  { useState } from 'react'
import axios from "axios";
const App = () => {
const [todos ,setTodos] = useState([]);

const[page,setPage] =useState(1);

useEffect(() => {
  const getData = async () => {
    let r = await axios.get(` http://localhost:8080/products?_page${page}&_limit=3`);
    setTodos(r.data);
  };
  getData();
},[]);

console.log(todos);



  return (<div>{/* TODO: Code here */}
   
   <Products todos ={todos} setTodos={setTodos} page={page} setPage={setPage}/>
    
  </div>);
};

export default App;
