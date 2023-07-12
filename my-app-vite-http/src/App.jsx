import { useState, useEffect } from 'react'

import './App.css'


const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //resgatar dados
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);

      const data = await res.json();
  
      setProducts(data)
    }

    fetchData();

  },[]);

  // add products
  const handleSubmit = async(e) =>{
    e.preventDefault()

    const product = {
      name,
      price
    }
  }

  return (
    <>
    <h1>Lista de Produtos</h1>

    <ul> {/*  () => ( object) */}
      {products.map((product)=> (
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
