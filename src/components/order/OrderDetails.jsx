import { useContext, useEffect, useState } from "react";

import { useGeneralContext } from "@/context/useGeneralContext";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
const OrderDetails = ({ orderPlaced }) => {
  const { user } = useContext(useGeneralContext);

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
        {/* <p>Payment Method: {orderInfoDetails?.paymentMethod}</p> */}
        {orderInfoDetails?.isPaid ? (
          <p className=" text-base font-bold text-green-primary">Paid</p>
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
        {orderInfoDetails?.isDelivered ? (
          <p className=" font-bold text-green-primary">Delivered</p>
        ) : (
          <p className=" font-bold ">Not delivered yet</p>
        )}
      </div>
    </section>
  );
};

export default OrderDetails;
