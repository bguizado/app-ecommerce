"use client"
import { useState, useEffect } from "react"
import {TYPES} from "../Actions/CarritoActions"
const [productList, setProductList] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/05e8172e-684f-494b-98f5-906e6564e8e0');
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  fetchProducts();
}, [])
export const carritoInitialState = {
Products: productList,
Cart: []
}

export function CarritoReducer (state , action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        default: return state
    
    }
}