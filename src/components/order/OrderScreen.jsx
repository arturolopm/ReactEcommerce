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

  return (
    <>
      <OrderDetails
        orderPlaced={orderPlaced}
        orderPlacedError={orderPlacedError}
      />
      <CartInfoDetails
        orderPlaced={orderPlaced}
        orderPlacedError={orderPlacedError}
        id={id}
      />
    </>
  );
};
export default OrderScreen;
