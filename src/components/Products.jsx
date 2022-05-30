

import React from 'react';
import {Flex,Grid} from '@chakra-ui/react';
import Product from './Product';
import Pagination from "./Pagination"
import AddProduct  from "./AddProduct";

const Products = ({todos,setTodos,page,setPage}) => {
 

  // TODO: Remove below const and instead import them from chakra
 
  
 

  return (
    <Flex direction="column">
      
       <AddProduct  todos ={todos} setTodos={setTodos}/> 
      <Grid  templateColumns='repeat(5 , 1fr)' gap={6}>
    {todos.map((todo)=>(
      <div key={todo.id}>
        <Product todo={todo}/>
      </div>
    )
)}
        
     </Grid>
      
      < Pagination page={page} setpage={setPage}/>
    </Flex>
  );
};

export default Products;
