import { useContext, useEffect, useState } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import axios from "axios";

import { useParams, useSearchParams } from "react-router-dom";
import OrderDetails from "@/components/order/OrderDetails";
import CartInfoDetails from "@/components/order/CartInfoDetails";
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
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      getOrderPlaced(id);
    }, 300);
  }, [id]);
  useEffect(() => {
    const payment_id = params.get("payment_id");
    if (payment_id) {
      setTimeout(() => {
        getOrderPlaced(id);
      }, 200);
    }
  }, []);

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
      />
    </>
  );
};
export default OrderScreen;
