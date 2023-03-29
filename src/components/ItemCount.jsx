import { useState, useContext } from 'react'
import { CartContextShop } from '../context/CartContext';

const ItemCount = ({stock, productName, price, picture, id}) => {

     const {cart, setCart} = useContext(CartContextShop);
     const [cantidad, setCantidad]= useState(1);

    const less =()=>{
        if (cantidad >1){
            setCantidad (cantidad -1);
        }
    }

    const add =()=>{
        if (cantidad < stock){
            setCantidad (cantidad + 1);
        }
        else alert("No hay mas stock")
    }

    const added = ()=>{
      
    const nuevoProducto={id, productName,cantidad,price, picture}
    const existingProductIndex = cart.findIndex(
        (product) => product.id === nuevoProducto.id
      );
      
      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].cantidad += nuevoProducto.cantidad;
        setCart(updatedCart);
      } else {
        setCart([...cart, nuevoProducto]);
      }
    }
    console.log(cart)
    
  return (
    <>
     <div className='itemCount'>
        <div className='displayCount'>
            <button className='displayButton' onClick={()=> less()}> - </button>
            <span className='spanDisplay'> {cantidad} </span>
            <button className='displayButton' onClick={()=> add ()}> + </button>
        </div>
            <button className='addButton' onClick={()=> added ()} > Agregar al carrito </button>
        
    <div>
   
    </div>
    </div>
    </>
    
  )
}


export default ItemCount