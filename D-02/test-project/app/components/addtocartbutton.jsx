"use client"

import { useContext } from "react";
import { cartContext } from "./cartprovider";

export default function AddToCartButton({product}) {
    const {addToCart} = useContext(cartContext)

    return(
        <button onClick={()=> addToCart(product)} className="btn btn-primay">Add To Cart</button>
    );
}