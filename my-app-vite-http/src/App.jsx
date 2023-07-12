import { useState, useEffect } from 'react'

//custom hook
import { useFetch } from './hooks/useFetch';

import './App.css'


const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  //custom hook
  const {data: items, httpConfig} = useFetch(url);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //resgatar dados
/*   useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);

      const data = await res.json();
  
      setProducts(data)
    }

    fetchData();

  },[]); */

  // add products
  const handleSubmit = async(e) =>{
    e.preventDefault()

    const product = {
      name,
      price
    }
/*     const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(product),
    })

    // dynamic load
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct ]) */
    // não pode chamar o res pois é uma string em JSON
    //deve transforma em objeto Javascript
    // com addedProduct

    // refactoring POST
    httpConfig(product, "POST");
    setName("");
    setPrice("");

  }

  return (
    <>
    <h1>Lista de Produtos</h1>

    <ul> {/*  () => ( object) */}
      {items && items.map((product)=> (
        <li key={product.id}>{product.name} - R$: {product.price}</li>
      ))}
    </ul>

        <div className="add-product">
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" value={name} 
                name="name" onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Price:
                <input type="number" value={price} 
                name="price" onChange={(e) => setPrice(e.target.value)} />
              </label>
              <input type="submit" value="Criar"/>
            </form>
        </div>

    </>
  )
}

export default App
