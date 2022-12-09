import { createContext, useState } from "react";

export const useCartDetails = createContext()

export default (props) => {

 
    const [cartItems, setCartItems] = useState([
        
    ])

    const addCartItems = (item) => {
        if (cartItems.length === 0){
            return setCartItems([...cartItems, item]);

        }

        setCartItems(cartItems.map(product =>{
            if(product.id === item.id){
                return (
                    {...product, quantity: product.quantity + item.quantity}
                )
            }
            else {
                return product
                }
        }))

    }

    const cartQuantity = cartItems.reduce((acc, current) => current.quantity + acc, 0)

    const deleteCartItems = (id) => { 
        setCartItems(cartItems.filter(product => product.id !== id))
     }

    return(
        <useCartDetails.Provider value={{cartItems, addCartItems, deleteCartItems, cartQuantity}}>
            {props.children}
        </useCartDetails.Provider>
    )
}