import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContextShop } from '../context/CartContext';

const Cart = () => {
  const { cart, setCart, total } = useContext(CartContextShop);

  const handleIncrementQuantity = (id, stock) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === id && item.cantidad < stock) {
          return {
            ...item,
            cantidad: item.cantidad + 1,
            subtotal: (item.cantidad + 1) * item.price
          };
        } else {
          return item;
        }
      })
    );
  };

  const handleDecrementQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === id ) {
          return {
            ...item,
            cantidad: item.cantidad - 1,
            subtotal: (item.cantidad - 1) * item.price
            
          };
        
        } else {
          return item
          
        }
        
      }).filter(item => item.cantidad > 0));
 
  };

  const borrar = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <div>
      {cart.map(prod => {
        return (
          <div key={prod.idKey}>
            <span> {prod.productName}</span>
            <div> Cantidad:{prod.cantidad}</div>
            <div>
              <img className='imgItem' src={prod.picture}></img>
            </div>
            <div> Precio:{prod.price}</div>
            <div> Subtotal: {prod.subtotal}</div>
            <div className='whiteSpace'></div>

            <button onClick={() => handleIncrementQuantity(prod.id, prod.stock)}>  + </button>
            <button onClick={() => handleDecrementQuantity(prod.id)}> menos </button>
            <button onClick={() => borrar(prod.id)}> quitar </button>
          </div>
        );
      })}
      
      <div>Total: {total()}</div>
      <Link to='/Form'>
    
      <button> Finalizar compra</button>
      </Link>
     
      <Link to='/'>
        {' '}
        <button> Volver al inicio </button>{' '}
      </Link>
    </div>
  );
};

export default Cart;