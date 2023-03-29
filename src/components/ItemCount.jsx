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
    const existingProductIndex = cart.find(
        (product) => product.id === nuevoProducto.id
      );
      
      if (existingProductIndex) {
                    const carritoActualizado = cart.map((prod)=>{
                        if(prod.id === nuevoProducto.id){
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
    console.log(cart, 'carrito')
    
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