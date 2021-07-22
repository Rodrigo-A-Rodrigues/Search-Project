import React, {memo} from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

interface ProductItemProps { 
  product: {
    id: number;
    price: number;
    title: string;
  }
  onAddToWishlist: (id:number) => void;
}

// shallo compare -> comparação rasa
// {} === {} // false
// igualdade referencial

function ProductItemComponent({ product, onAddToWishlist }:ProductItemProps) {
  return (
    <Box w="250px">
      <Flex borderBottom="1px">{product.title}</Flex>
      <Flex mb="10" mt="1" justifyContent="space-between" align="center">
        <strong>
          R$ {product.price},00
        </strong>
        <Button
          colorScheme="green"
          onClick={() => onAddToWishlist(product.id)}
        >Add to wishlist</Button>
      </Flex>
    </Box>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});