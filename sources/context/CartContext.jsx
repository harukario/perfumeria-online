import { useState, createContext } from "react";

export const CartContextShop =createContext(null);

const CartContext =({children})=>{
    const [cart, setCart]=useState([]);
    console.log(cart.length)

    return(
        <CartContextShop.Provider value={{cart, setCart}}>
            {children}
        </CartContextShop.Provider>
    )
}


export default CartContext;
