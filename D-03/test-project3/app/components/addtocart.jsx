"use client";

import { useContext } from "react";
import { CartContext } from "@/app/components/cartprovider"; // Update with your actual path

export default function AddToCartButton({ product }) {
    const { addToCart } = useContext(CartContext);
    

    return (
        <button 
            onClick={() => addToCart(product)} 
            className="btn btn-primary"
        >
            Add to cart
        </button>
    );
}