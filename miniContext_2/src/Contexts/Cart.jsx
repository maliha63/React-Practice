import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const CartContext = createContext(null);

export const useCart = () => {
const cart = useContext(CartContext);
return cart;//it is a solution to avoid importing useContext and CartContext in every component where we want to use the cart context. By creating a custom hook like useCart, we can simply call this hook in any component to access the cart context without having to import useContext and CartContext separately. This makes our code cleaner and more reusable.
}

// export const useCart = () => {
//  return useContext(CartContext);
// }  
            //same as aove but more concise/simpler way to write it.
            // No storing in variable and directly returning the value of useContext(CartContext).


export const CartProvider = (props) => {
    const [items , setItems] = useState([]);
    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}