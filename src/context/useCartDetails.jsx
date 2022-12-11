import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addCartItems = (item) => {
    if (cartItems.length === 0) {
      return setCartItems([item]);
    }
    const newCartItems = [...cartItems];

    let isPresent = false;
    console.log(item);
    for (let i = 0; i < newCartItems.length; i++) {
      if (newCartItems[i].id === item.id) {
        newCartItems[i].quantity += item.quantity;

        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      newCartItems.push(item);
    }
    setCartItems(newCartItems);
  };

  const cartQuantity = cartItems.reduce(
    (acc, current) => current.quantity + acc,
    0
  );
  const totalPrice = cartItems.reduce(
    (acc, current) => current.quantity * current.price + acc,
    0
  );

  const deleteCartItems = (id) => {
    setCartItems(cartItems.filter((product) => product.id !== id));
  };

  return (
    <useCartDetails.Provider
      value={{
        cartItems,
        addCartItems,
        deleteCartItems,
        cartQuantity,
        totalPrice,
      }}
      //   cartQuantity
    >
      {props.children}
    </useCartDetails.Provider>
  );
};
