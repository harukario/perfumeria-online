import { useState, useContext, useEffect } from 'react'
import { CartContextShop } from '../context/CartContext';

const ItemCount = ({stock, productName, price, picture, id, idKey}) => {

     const {cart, setCart} = useContext(CartContextShop);
     const [cantidad, setCantidad]= useState(1);
     const subtotal= cantidad*price; 

    const less =()=>{
        if (cantidad >1){
            setCantidad (cantidad -1);
        }
    }

    const add =()=>{
        if (cantidad < stock){
            setCantidad (cantidad + 1);
        }
        return(
            <div> No hay mas stock</div>
        )
    }

    const added = ()=>{
    const nuevoProducto={id, productName,cantidad,price, picture, subtotal,stock}
    const existingProductIndex = cart.find(
        (product) => product.id === nuevoProducto.id
      );
      
      if (existingProductIndex) {
                    const carritoActualizado = cart.map((prod)=>{
                        if(prod.id === nuevoProducto.id && prod.cantidad + cantidad <= prod.stock){
                            return {...prod, cantidad:prod.cantidad + cantidad}
                        }else{
                            return prod
                        }
                    })
                    setCart(carritoActualizado )
      } else {
        setCart([...cart, nuevoProducto]);
      }
    }
 
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