import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
const OrderInfo = () => {
  const { user, shippingAddress, paymentMethod } =
    useContext(useGeneralContext);
  return (
    <section className=" container mx-auto flex max-w-5xl flex-wrap justify-between gap-2 bg-green-50 p-4  text-xs text-very-dark-blue">
      <div className=" mx-auto">
        <div className="  text-3xl text-green-primary">
          <FaUserShield />
        </div>
        <div>Usuario </div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
      <div className=" mx-auto">
        <div className=" text-3xl text-green-primary">
          <MdLocalShipping />
        </div>
        <div>Información</div>
        <p>Shippig: {shippingAddress.country}</p>
        {/* <p>Payment Method: {paymentMethod}</p> */}
      </div>
      <div className=" mx-auto">
        <div className=" text-3xl text-green-primary">
          <MdLocationOn />
        </div>
        <div>Entregar a</div>
        <p>{shippingAddress.address}</p>
        <p>{shippingAddress.city}</p>
      </div>
    </section>
  );
};

export default OrderInfo;
