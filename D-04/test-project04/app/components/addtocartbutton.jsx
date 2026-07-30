"use client"

import { useContext } from "react";
import { CartContext } from "./cartprovider";

export default function AddToCartButton({product}){
    const {addToCart} = useContext(CartContext)
    return(
        
            <button onClick={()=> addToCart(product)} className="btn btn-primary">Add To Cart</button>
        
    );
} 