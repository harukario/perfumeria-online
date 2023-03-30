import React from "react"
import { CartContextShop } from '../context/CartContext';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {collection, getFirestore,addDoc } from "firebase/firestore";
const Form = () => {
    const { cart, setCart, total,cartQuantity } = useContext(CartContextShop);
    const [cliente,setCliente] = useState([]);
    const [orderId,setOrderId] = useState(null);
    const [envio,setEnvio] = useState ([]);
    const [pago,setPago] = useState ([]);
    const db=   getFirestore();

    const handleSubmit =(e)=>{
        e.preventDefault();
        addDoc(orderCollection, order). then(({id})=> setOrderId(id));
        
     }

     const totalCompra = total()
     const fecha =  new Date();
     const order ={
        cliente,
        envio,
        pago,
        totalCompra,
        fecha,
        items: cart.map((item)=>({id: item.id, nombre: item.productName, precio: item.price, cantidad: item.cantidad}))
     }

     const orderCollection = collection (db, "compra")
     

  return (
    <> 
    <div>
    <form onSubmit={handleSubmit}> 
        <div> 
            <h2> Resumen de la compra:</h2>
        <span> Cantidad de productos:{cartQuantity()} </span>
            {cart.map ((prod) => (
                <div>
                <Link className="link" to={`/item/${prod.id}`}> <img className='imgItem' src={prod.picture}></img> </Link>
                <div>{prod.productName}
                <span>Cantidad: ${prod.cantidad} </span>
                <span>{prod.price} </span> 
                </div>
               
                <span>Subtotal: ${prod.subtotal} </span>
                </div>
            ))}
            <h3> TOTAL: ${total ()} </h3>
            
        </div>
        
        
            <h2>1. DATOS PERSONALES </h2>
            <div> 
                <div> 
                    Nombre y apellido  
                     <input 
                        type="text"
                        onChange={(e)=> setCliente({ ...cliente, nombre: e.target.value })}/>     
                 </div>

                <div> 
                    Telefono: 
                    <input 
                        type="number" 
                        onChange={(e)=> setCliente({ ...cliente, telefono: e.target.value })} />   
                </div>

                <div> 
                   Email:    
                   <input 
                        type="text" 
                        onChange={(e)=> setCliente({ ...cliente, email: e.target.value })}/>    
                </div>

            </div>

            <h2>2. DATOS DE ENVIO </h2>
            <div> 
                <input
                type="checkbox"
               
                onChange={(e) => setEnvio({ ...envio, tipoEnvio: "envio a domicilio" })} />
                <label htmlFor="mi-checkbox">Envío a domicilio</label>

                <input
                type="checkbox"
               
                onChange={(e) => setEnvio({ ...envio, tipoEnvio: "retira en sucursal" })} />
                <label htmlFor="mi-checkbox">Retiro en local</label>


                 <div> 
                   Provincia:    
                   <input 
                        type="text" 
                        onChange={(e)=> setEnvio({ ...envio, provincia: e.target.value })}/>    
                </div>
               
                <div> 
                   Localidad:    
                   <input 
                        type="text" 
                        onChange={(e)=> setEnvio({ ...envio, localidad: e.target.value })}/>    
                </div>
                <div> 
                   Direccion:    
                   <input 
                        type="text" 
                        onChange={(e)=> setEnvio({ ...envio, direccion: e.target.value })}/>    
                </div>
            </div>
            <div> 
                <div>
                    <h2>3. PAGO  </h2>
                    <select   onChange={(e)=> setPago({ ...pago, formaPago: e.target.value })}> 
                    <option>Tarjeta de credito</option>
                    <option>Tarjeta de debito</option>
                    <option>Transferencia</option>
                    </select>
                </div>
                <div> Número tarjeta <input></input></div>
                <div> Nombre que figura: <input type="text"></input></div>
                <div> Numero del dorso: <input></input></div>
            
            </div> 
    
        <button type ="submit">Confirmar compra</button>
        </form>
        <p>numero de orden {orderId}</p>
    </div>
    
    </>
  )
}

export default Form