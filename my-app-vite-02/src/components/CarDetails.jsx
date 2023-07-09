
const CarDetails = ({brand,km,color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
           {newCar &&<li>Esse carro é novo!</li>}
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Color: {color}</li>
        </ul>
      {newCar && <p>Esse carro é novo!</p>}
    </div>
  )
}

export default CarDetails