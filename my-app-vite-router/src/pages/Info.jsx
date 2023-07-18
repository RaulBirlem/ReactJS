import { useParams } from "react-router-dom"


const Info = () => {
    const {id} = useParams();

  return (
    <div>Informaçõs sobre o produto: {id}</div>
  )
}

export default Info