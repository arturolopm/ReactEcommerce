import { useContext, useEffect, useState } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import axios from "axios";

import { useParams } from "react-router-dom";
import OrderDetails from "@/components/order/OrderDetails";
import CartInfoDetails from "@/components/order/CartInfoDetails";
import MPButton from "@/components/buttons/MPButton";
const OrderScreen = () => {
  const { user } = useContext(useGeneralContext);
  const { id } = useParams();
  // get Order Placed
  const [orderPlaced, setOrderPlaced] = useState();
  const [orderPlacedError, setOrderPlacedError] = useState();
  const getOrderPlaced = async (id) => {
    const config = {
      method: "get",
      url: `/api/orders/${id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios(config)
      .then(function (response) {
        setOrderPlaced(response.data);

        if (response.status === 201) {
          setOrderPlacedError("");
        }
      })
      .catch(function (error) {
        setOrderPlacedError(error.message);
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
      <MPButton id={id} />
    </>
  );
};
export default OrderScreen;
