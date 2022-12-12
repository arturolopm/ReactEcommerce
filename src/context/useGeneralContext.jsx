import { createContext, useState, useEffect } from "react";

export const useGeneralContext = createContext();

export default (props) => {
  const initialCart = JSON.parse(window.localStorage.getItem("cart")) || [];

  const [cartItems, setCartItems] = useState(initialCart);

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart !== null) setCartItems(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addCartItems = (item) => {
    if (cartItems.length === 0) {
      return setCartItems([item]);
    }
    const newCartItems = [...cartItems];

    let isPresent = false;

    for (let i = 0; i < newCartItems.length; i++) {
      if (newCartItems[i]._id === item._id) {
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

  const deleteCartItems = (_id) => {
    setCartItems(cartItems.filter((product) => product._id !== _id));
  };

  return (
    <useGeneralContext.Provider
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
    </useGeneralContext.Provider>
  );
};
