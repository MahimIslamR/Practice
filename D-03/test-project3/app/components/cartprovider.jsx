"use client";

import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);


    useEffect(()=>
        localStorage.setItem("my_cart",JSON.stringify(cart))

         ,[cart]);


    const addToCart= (pd) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item)=> item.id === pd.id)
            if (existingItem) {
                return prevCart.map ((item)=>
                    item.id === pd.id? {...item, quantity : item.quantity +1} : item
                );
            }
            return [...prevCart,{...pd , quantity : 1} ];
        });
    };   



    return (
        <CartContext.Provider value={{ cart , addToCart }}>
            {children}
        </CartContext.Provider>
    );
}