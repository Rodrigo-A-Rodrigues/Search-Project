import { SearchIcon } from "@chakra-ui/icons";
import { Box, Text, Input, Flex, IconButton, Button, useToast } from "@chakra-ui/react";
import React, { FormEvent, useState } from "react"
import { SearchResults } from "../components/SearchResults";

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const toast = useToast();
  
  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if(!search.trim()) {
      return;
    } 

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json();

    setResults(data);
  }

  async function addToWishlist(id: number) {
    console.log(id)
  }

  return (
    <Box
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="space-between"
      px="10"
      py="32"
    >
      <Text as="h1" fontSize="6xl" mb="12">Search</Text>

      <form onSubmit={handleSearch}>
        <Flex maxW="600px" mb="12">
          <Input 
            variant="flushed" 
            placeholder="Search" 
            type="text" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            mr="5"
          />
          <Button 
            colorScheme="blackAlpha"
            w="45px"
            type="submit"
            onClick={() =>
              toast({
                title: "Search Products",
                description: "Results:",
                duration: 9000,
                isClosable: true,
              })
            }
          >
            <IconButton 
              colorScheme="blackAlpha"
              aria-label="Search database" 
              icon={<SearchIcon />} 
            />
          </Button>
        </Flex>
      </form>

      <SearchResults 
        results={results} 
        onAddToWishlist={addToWishlist}    
      />
    </Box>
  )
}

/**
 *  1. Criar nova versão do component
 *  2. Comparar com a versão anterior
 *  3. Se houver alteração, atualizar alterações
 */

/**
 * 1. Pure functional Component
 * 2. Renders too often,
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * Usememo / useCallback
 * 
 * Usememo:
 * 1. Cálculos pesados
 * 2. Igualdade referencial (repasse de informação entre componentes pai -> filho)
 * 
 * useCallback:
 * 1. 
 * 2.
 */