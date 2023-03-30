import { useState, createContext, useEffect } from "react";

export const CartContextShop =createContext(null);

const CartContext =({children})=>{
    const [cart, setCart]=useState([]);

    const cartQuantity = ()=>{
        return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
      }
 
    const total = ()=>{
        return cart.reduce((acc, prod) => (acc += prod.subtotal), 0);
      }

    


   


    return(
        <CartContextShop.Provider value={{cart, setCart, cartQuantity, total}}>
            {children}
        </CartContextShop.Provider>
    )
}


export default CartContext;
