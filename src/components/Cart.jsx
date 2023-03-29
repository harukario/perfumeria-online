import React from 'react'
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { CartContextShop } from '../context/CartContext';
  
const Cart = () => {
  const {cart} = useContext(CartContextShop);
  
  return(
    <>

    <div> Nombre {cart.nombre}</div>
    
    <div> Cantidad{cart.cantidad} </div>


     
    <Link to="/">
      <button>
      Volver al inicio
      </button>
    </Link>
    </>
)
  
}

export default Cart 
