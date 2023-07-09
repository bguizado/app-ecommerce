import { Children } from "react"
import {useReducer, createContext, useContext} from "react"
export const Store = createContext()

const initialState = { cart: {
    carItems:[]
}}

function reducer (state, action){
    switch (action.type) {
        case "CARD_ADD_ITEM":
            {
                const newItem = action.payload            }
            const existItem = state.cart.carItems.find( item => item.id === newitem.id)
            //condicion
            const cartItems = existItem ? state.cart.cartItems.map(item => item.nombre === existItem.nombre ? newItem: item)
            //sino existe    
            : [...state.cart.carItems, newItem]
            
            return {...state, cart:{...state.cart,cartItems}}

    
        default:
            return state
    }


 }
export function StoreProvider ({Children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{Children}</Store.Provider>
}

export function Statecontext () {
    const context = useContext(Store)
    return context
}
