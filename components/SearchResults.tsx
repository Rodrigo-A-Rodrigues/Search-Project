import { Box, Text } from "@chakra-ui/react";
import React, {useMemo} from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps { 
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
  onAddToWishlist: (id:number) => void;
}

export function SearchResults({ results, onAddToWishlist } : SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    },0)
  }, [results])
  return (
    <Box>
      <Text as="h1" fontSize="3xl" mb="24">{totalPrice}</Text>

      {results.map(product => {
        return (
          <ProductItem 
            key={product.id}
            product={product} 
            onAddToWishlist={onAddToWishlist}
          />
        );
      })}
    </Box>
  )
}