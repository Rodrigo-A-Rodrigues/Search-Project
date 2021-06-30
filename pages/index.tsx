import { FormEvent, useState } from "react"
import { SearchResults } from "../components/SearchResults";

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  
  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if(!search.trim()) {
      return;
    } 

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json();

    setResults(data);
  }

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} />
    </div>
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
 * 1. Cálculos pesados
 * 2. Igualdade referencial (repasse de informação entre componentes pai -> filho)
 */