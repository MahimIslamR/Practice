"use client"

import { createContext, useEffect, useState } from "react"

export const cartContext = createContext();

export default function CartProvider({children}) {
    const [cart , setCart] = useState([]);

    useEffect(()=>
        
        localStorage.setItem("my_cart02", JSON.stringify(cart))
        ,[cart]);

    const addToCart = (product)=>{
        setCart((prevItem)=>{
            const existItem = prevItem.find((item=> item.id===product.id))
            if (existItem) {
                return prevItem.map((item)=>
                item.id === product.id? {...item, quantity : item.quantity +1 } : item)
            }
            return [...prevItem, {...product , quantity : 1}]
        })
    };




    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {children}
        </cartContext.Provider>
    );
}