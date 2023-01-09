import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useGeneralContext } from "@/context/useGeneralContext";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
const OrderDetails = () => {
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
    console.log(id);
  }, [id]);

  const [orderInfoDetails, setOrderInfoDetails] = useState();
  const getOrderInfoDetails = async () => {
    await setOrderInfoDetails(orderPlaced);
  };
  useEffect(() => {
    getOrderInfoDetails();
  }, [orderPlaced]);
  return (
    <section className=" container mx-auto flex max-w-5xl flex-wrap justify-between gap-2 bg-green-50 p-4  text-xs text-very-dark-blue">
      <div className=" mx-auto">
        <div className="  text-3xl text-green-primary">
          <FaUserShield />
        </div>
        <div>User </div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
      <div className=" mx-auto">
        <div className=" text-3xl text-green-primary">
          <MdLocalShipping />
        </div>
        <div>Order Info</div>
        <p>Shipping: {orderInfoDetails?.shippingAddress?.country}</p>
        <p>Payment Method: {orderInfoDetails?.paymentMethod}</p>
        {orderInfoDetails.isPaid ? (
          <p className=" font-bold text-green-primary">Paid</p>
        ) : (
          <p className=" font-bold text-red-600">Not Paid</p>
        )}
      </div>
      <div className=" mx-auto">
        <div className=" text-3xl text-green-primary">
          <MdLocationOn />
        </div>
        <div>Deliver to</div>
        <p>{orderInfoDetails?.shippingAddress?.address}</p>
        <p>{orderInfoDetails?.shippingAddress?.city}</p>
        {orderInfoDetails.isDelivered ? (
          <p className=" font-bold text-green-primary">Delivered</p>
        ) : (
          <p className=" font-bold text-red-600">Not delivered yet</p>
        )}
      </div>
    </section>
  );
};

export default OrderDetails;
