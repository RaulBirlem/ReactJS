import React from 'react'


//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'


const Search = () => {
    const query = useQuery()
    const search = query.get("q")
    //.get é uma função de URLSearchParams
    // buscar atributo cadastrado
  return (
    <div>
        <h2>Search</h2>
        <p>{search}</p>
    </div>
  )
}

export default Search