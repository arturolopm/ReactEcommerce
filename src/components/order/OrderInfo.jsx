import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
const OrderInfo = () => {
  return (
    <section className=" container mx-auto flex max-w-5xl flex-wrap justify-between gap-2 bg-green-50 p-4  text-xs text-very-dark-blue">
      <div className=" mx-auto">
        <div className="  text-3xl text-green-primary">
          <FaUserShield />
        </div>
        <div>User Info</div>
        <p>Arturo Lopez</p>
        <p>carturolopezm@gmail.com</p>
      </div>
      <div className=" mx-auto">
        <div className=" text-3xl text-green-primary">
          <MdLocalShipping />
        </div>
        <div>Order Info</div>
        <p>Shippig: Colombia</p>
        <p>Payment Method: Credit Card</p>
      </div>
      <div className=" mx-auto">
        <div className=" text-3xl text-green-primary">
          <MdLocationOn />
        </div>
        <div>Deliver to</div>
        <p>Carrera 20 no 33 a - 32 apt 305</p>
        <p>Bogotá</p>
      </div>
    </section>
  );
};

export default OrderInfo;
