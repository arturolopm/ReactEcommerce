import { useContext, useEffect, useState } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import axios from "axios";

import { useParams } from "react-router-dom";
import OrderDetails from "@/components/order/OrderDetails";
import CartInfoDetails from "@/components/order/CartInfoDetails";

const OrderScreen = () => {
  const { user } = useContext(useGeneralContext);
  const { id } = useParams();
  // get Order Placed
  const [orderPlaced, setOrderPlaced] = useState();
  console.log(orderPlaced);
  const [orderPlacedError, setOrderPlacedError] = useState();
  const getOrderPlaced = async (id) => {
    const config = {
      method: "get",
      url: `http://localhost:5000/api/orders/${id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios(config)
      .then(function (response) {
        setOrderPlaced(response.data);

        // console.log(response.status);
        if (response.status === 201) {
          setOrderPlacedError("");
        }
      })
      .catch(function (error) {
        setOrderPlacedError(error.message);
        console.log(orderPlacedError);
      });
  };
  useEffect(() => {
    getOrderPlaced(id);
  }, [id]);

  const [getOrderPaid, setGetOrderPaid] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getOrderPlaced(id);
    }, 500);
  }, [getOrderPaid]);

  return (
    <>
      <OrderDetails
        orderPlaced={orderPlaced}
        orderPlacedError={orderPlacedError}
      />
      <CartInfoDetails
        orderPlaced={orderPlaced}
        setOrderPlaced={setOrderPlaced}
        orderPlacedError={orderPlacedError}
        id={id}
        getOrderPaid={getOrderPaid}
        setGetOrderPaid={setGetOrderPaid}
      />
    </>
  );
};
export default OrderScreen;
