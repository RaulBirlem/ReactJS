import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    //dinamic routes
    const {id} = useParams()

    //individual load product
    const url = "http://localhost:3000/products/" +id
    const {data:product, loading,error} = useFetch(url)
    console.log(product)
  return (
   <>
    <p>ID do produto:{id}</p>
    {error && <p>Falha ao carregar...</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div>
            <h1>{product.name}</h1>
            <p><b>R$ </b>{product.price}</p>
            {/* nested routes */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    )}
   </>
  )
}

export default Product