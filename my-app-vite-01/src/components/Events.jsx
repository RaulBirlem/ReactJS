

const Events = () => {
// e - dados que o evento possui
    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("Ativou")
    }

    const renderSomething = (x) => {
        if(x){
            return <h4>Renderizando if</h4>
        }else {
            return <h4>Renderizando else</h4>
        }
    }

  return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique aqui!</button>
        </div>
        <div>
            <button onClick={()=>console.log("Click!")}>Clique aqui!</button>
           
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events