import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";

import DeleteIcon from "@/components/icons/DeleteIcon";
import { Link } from "react-router-dom";

const CartDetailsHeader = (props) => {
  const { cartItems, deleteCartItems, deleteAllCartItems, totalPrice } =
    useContext(useGeneralContext);
  const setIsOpenCart = props.setIsOpenCart;
  return (
    <div className=" absolute top-[125%] left-0 z-10 w-full text-base text-slate-700 md:top-full md:left-full md:max-w-md md:-translate-x-full">
      <div className=" mx-4 rounded-md bg-white shadow-md">
        <h4 className=" px-6 py-2 text-lg font-bold ">Cart</h4>
        <hr />
        <div className=" text-left text-slate-500 ">
          Delete all items
          <button className=" mx-4" onClick={() => deleteAllCartItems([])}>
            <DeleteIcon className="hover:fill-green-primary" />
          </button>
        </div>
        {cartItems.length === 0 && (
          <p className="py-16 text-center">Your cart is empty</p>
        )}
        {cartItems.map((item) => (
          <article
            key={item?._id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4 "
          >
            <Link to={`/products/${item._id}`}>
              <img src={item?.imagesMain[0]} alt="" className="rounded-md" />
            </Link>
            <div>
              <h6>{item?.title}</h6>
              <div>
                <span>
                  ${(item?.price * (1 - item?.discount))?.toFixed(2)} x{" "}
                  {item.quantity}
                </span>{" "}
                <span className=" font-bold">
                  ={" "}
                  {(
                    item?.price *
                    (1 - item?.discount) *
                    item?.quantity
                  )?.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className=" ml-auto"
              onClick={() => deleteCartItems(item?._id)}
            >
              <DeleteIcon className="hover:fill-green-primary" />
            </button>
          </article>
        ))}
        {cartItems.length != 0 && (
          <Link to="/cart" onClick={() => setIsOpenCart(false)}>
            <button className=" w-full rounded-md bg-green-primary py-4 text-white transition-all hover:bg-green-700">
              Checkout = ${totalPrice?.toFixed(2)}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartDetailsHeader;
