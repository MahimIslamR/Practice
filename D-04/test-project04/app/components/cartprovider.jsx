"use client";

import { createContext, useState } from "react";



const CartContext= createContext();;

export default function CartProvider ({children}) {
    const [cart, setCart] = useState([]);
    return(
         <CartContext.Provider value = {{cart}}>
            {children}
        </CartContext.Provider>
    );
}