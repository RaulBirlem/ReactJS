

const Item = ({item, selectProduct, changeQuantity}) => {

    



    return (
      <>
           <div onClick={()=>selectProduct(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`}>
                        <div className="photo">
                            <img src={"./img/" + item.photo} />
                        </div>
                        <div className="description">
                            <span className="name">{item.name}</span>
                            <span className="price">{item.price}</span>
                        {   item.isInBag && /* se isInBag for false ele não exibe */
                            <div className="quantity-area">
                                <button disabled={item.quantity<=1} onClick={(e)=>changeQuantity(e, item.id, -1)}>-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button onClick={(e)=>changeQuantity(e, item.id, +1)}>+</button>
                            </div>
                        }
                        </div>
                    </div>
      </>
    )
  }
  
  export default Item





  /* 
  
  
    e.stopPropagation():
     impede que o evento se 
     propague adiante através dos elementos pai ou 
     filho. Isso pode ser útil quando você tem eventos
     aninhados e deseja que apenas o evento do elemento
     específico seja acionado, sem que os eventos dos 
     elementos pais sejam ativados.
    
    e.preventDefault():
     o comportamento padrão de um clique em um botão de
     envio é recarregar a página ou enviar os dados para 
     o servidor. Usar e.preventDefault() impede esse 
     comportamento padrão de acontecer, permitindo que 
     você controle o que ocorre após o evento.
    
    */