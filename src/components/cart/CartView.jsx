import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";

import DeleteIcon from "@/components/icons/DeleteIcon";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cartItems, deleteCartItems, totalPrice } =
    useContext(useGeneralContext);

  return (
    <section className=" mx-auto min-h-screen max-w-7xl bg-white px-4 md:text-base">
      <div className=" mx-4 rounded-md bg-white shadow-md">
        <h4 className=" px-6 py-2 text-lg font-bold text-green-primary">
          CART
        </h4>
        <hr />
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
              <p>{item?.description}</p>
              <div>
                <span>
                  ${(item?.price * (1 - item?.discount))?.toFixed(2)} x{" "}
                  {item.quantity}
                </span>{" "}
                <span className=" font-bold">
                  {" "}
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
          <div className=" px-6 pb-8">
            <button className=" w-full rounded-md bg-green-primary py-4 text-white transition-all hover:bg-green-700">
              Checkout = ${totalPrice?.toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartView;
