import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const useGeneralContext = createContext();

export default (props) => {
  const cartFromStorage = JSON.parse(window.localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(cartFromStorage);

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

  // Login User
  const initialUser = JSON.parse(window.localStorage.getItem("user"));

  const [user, setUser] = useState(initialUser);
  console.log(user);
  useEffect(() => {
    const newUser = window.localStorage.getItem("user");
    if (newUser !== null) setUser(JSON.parse(newUser));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const [loginError, setLoginError] = useState();
  const login = async ({ email, password }) => {
    const data = JSON.stringify({
      email,
      password,
    });

    const config = {
      method: "post",
      url: "http://localhost:5000/api/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        error.message = "wrong email or password";
        setLoginError(error);
      });
  };
  const [registerError, setRegisterError] = useState();
  const register = async ({ name, email, password }) => {
    const data = JSON.stringify({
      name,
      email,
      password,
    });

    const config = {
      method: "post",
      url: "http://localhost:5000/api/users/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setUser(response.data);
        setRegisterError("");
      })
      .catch(function (error) {
        setRegisterError(error);
        console.log(error.message);
      });
  };
  const logOut = () => {
    setUser(null);
    setLoginError(null);
  };

  return (
    <useGeneralContext.Provider
      value={{
        cartItems,
        addCartItems,
        deleteCartItems,
        cartQuantity,
        totalPrice,
        login,
        logOut,
        user,
        loginError,
        register,
        registerError,
      }}
      //   cartQuantity
    >
      {props.children}
    </useGeneralContext.Provider>
  );
};
