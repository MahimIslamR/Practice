"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // 1. Load saved cart safely when the page opens
    useEffect(() => {
        const savedCart = localStorage.getItem("my_cart");
        if (savedCart && savedCart !== "undefined") {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error("Failed to parse cart", error);
            }
        }
    }, []);

    // 2. Save cart whenever it changes
    useEffect(() => {
        localStorage.setItem("my_cart", JSON.stringify(cart));
    }, [cart]);

    // 3. Add to cart function
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}