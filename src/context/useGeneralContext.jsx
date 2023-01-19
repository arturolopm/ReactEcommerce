import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: "success",
        title: "Item added",
      });
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
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "success",
      title: "Item added",
    });
  };
  const deleteAllCartItems = () => {
    return setCartItems([]);
  };

  const cartQuantity = cartItems.reduce(
    (acc, current) => current.quantity + acc,
    0
  );
  const totalPrice = cartItems.reduce(
    (acc, current) =>
      current.quantity * current.price * (1 - current.discount) + acc,
    0
  );

  const deleteCartItems = (_id) => {
    setCartItems(cartItems.filter((product) => product._id !== _id));
  };

  // Save Shipping Address
  const addressFromStorage =
    JSON.parse(window.localStorage.getItem("shippingAddress")) || [];

  const [shippingAddress, setShippingAddress] = useState(addressFromStorage);

  useEffect(() => {
    const shippingAddressFromStorage =
      window.localStorage.getItem("shippingAddress");
    if (shippingAddressFromStorage !== null)
      setShippingAddress(JSON.parse(shippingAddressFromStorage));
  }, []);

  const saveShippingAddress = ({
    address,
    city,
    postalCode,
    state,
    country,
    email,
    phone,
  }) => {
    const newShippingAddress = {
      address,
      city,
      postalCode,
      state,
      country,
      email,
      phone,
    };

    setShippingAddress(newShippingAddress);
  };
  useEffect(() => {
    window.localStorage.setItem(
      "shippingAddress",
      JSON.stringify(shippingAddress)
    );
  }, [shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const savePaymentMethod = ({ paymentMethodForm }) => {
    setPaymentMethod(paymentMethodForm);
  };

  // Place Order

  const sendCart = cartItems.map((item) => ({
    ...item,
    product: item._id,
  }));

  // place order

  const [order, setOrder] = useState();
  const [orderError, setOrderError] = useState();
  const placeOrder = async () => {
    const data = JSON.stringify({
      orderItems: sendCart,
      shippingAddress: shippingAddress,

      paymentMethod: paymentMethod,
      itemsPrice: totalPrice,
      taxprice: totalPrice * 0.15,
      shippingPrice: totalPrice > 50 ? 0 : 15,
      totalPrice: totalPrice + (totalPrice > 50 ? 0 : 15) + totalPrice * 0.15,
    });
    const config = {
      method: "post",
      url: "http://localhost:5000/api/orders/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        setOrder(response.data);

        if (response.status === 201) {
          setCartItems([]);
        }
      })
      .catch(function (error) {
        setOrderError(error.message);
      });
  };

  // pay order

  const payOrder = async (orderId, paymentResult) => {
    const data = JSON.stringify({
      orderItems: sendCart,
      shippingAddress: shippingAddress,
      // isPaid: paymentResult,
      paymentMethod: paymentMethod,
      itemsPrice: totalPrice,
      taxprice: totalPrice * 0.15,
      shippingPrice: totalPrice > 50 ? 0 : 15,
      totalPrice: totalPrice + (totalPrice > 50 ? 0 : 15) + totalPrice * 0.15,
    });
    const config = {
      method: "put",
      url: `http://localhost:5000/api/orders/${orderId}/pay`,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      data: paymentResult,
    };

    await axios(config);
    try {
      (function (response) {
        setOrder(...order, (order.isPaid = response.data.isPaid));
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
    }
  };

  // Get user order's list
  const [orderListed, setOrderListed] = useState();
  console.log(orderListed);
  const getOrderListed = async () => {
    const config = {
      method: "get",
      url: "http://localhost:5000/api/orders/",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setOrderListed(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Login User
  const initialUser = JSON.parse(window.localStorage.getItem("user"));

  const [user, setUser] = useState(initialUser);
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

    await axios(config)
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

    await axios(config)
      .then(function (response) {
        setUser(response.data);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "User succesfullly registered",
        });
      })
      .catch(function (error) {
        setRegisterError(
          "Email already exist, please login instead of register"
        );
      });
    setTimeout(() => setRegisterError(""), 3000);
  };
  const [updateProfileError, setUpdateProfileError] = useState();
  const updateProfile = async ({ name, email, password }) => {
    const data = JSON.stringify({
      name,
      email,
      password,
    });

    const config = {
      method: "put",
      url: "http://localhost:5000/api/users/profile",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setUser(response.data);
        setUpdateProfileError("");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Profile updated",
        });
      })
      .catch(function (error) {
        setUpdateProfileError(error.message);
      });
    setTimeout(() => setUpdateProfileError(""), 3000);
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
        deleteAllCartItems,
        cartQuantity,
        totalPrice,
        login,
        logOut,
        user,
        loginError,
        register,
        registerError,
        updateProfile,
        updateProfileError,
        saveShippingAddress,
        savePaymentMethod,
        shippingAddress,
        paymentMethod,
        placeOrder,
        orderError,
        order,
        setOrder,
        payOrder,
        orderListed,
        getOrderListed,
        // getOrderPlaced,
        // orderPlaced,
      }}
      //   cartQuantity
    >
      {props.children}
    </useGeneralContext.Provider>
  );
};
