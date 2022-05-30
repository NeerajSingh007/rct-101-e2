import React from "react";
import {Text,Box,Stack,Image,Heading,Tag,TagLabel} from '@chakra-ui/react';


const Product = ({todo}) => {
  // TODO: Remove below const and instead import them from chakra
   
  return (
    <Stack data-cy="product" w='400px' h ='350px'>
      <Image data-cy="product-image" src={todo.imageSrc} />
      <Text data-cy="product-category">{todo.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{todo.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{todo.title}</Heading>
      <Box data-cy="product-price">{todo.price}</Box>
    </Stack>
  );
};

export default Product;
