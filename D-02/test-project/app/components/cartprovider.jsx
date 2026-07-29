"use client"

import { createContext, useState } from "react"

const cartContext = createContext();

export default function CartProvider({children}) {
    const [cart , setCart] = useState([]);

    const addToCart = (pd) => {
        setCart((prevCart)=>{
            const existingItem = prevCart.find((pd))
        });
    };


    return (
        <cartContext.Provider value={{cart}}>{children}</cartContext.Provider>
    );
}