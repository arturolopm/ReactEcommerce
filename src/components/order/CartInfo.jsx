import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";

import DeleteIcon from "@/components/icons/DeleteIcon";
import { Link } from "react-router-dom";
const CartInfo = () => {
  const { cartItems, deleteCartItems, deleteAllCartItems, totalPrice } =
    useContext(useGeneralContext);

  return (
    <div className=" mx-auto flex max-w-5xl flex-col gap-4 md:flex-row">
      <div className=" mx-4 max-w-3xl rounded-md bg-white text-sm shadow-md md:w-3/5">
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
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-2 md:py-4 "
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

        {/* <Link to="/cart">
        <button className=" w-full rounded-md bg-green-primary py-4 text-white transition-all hover:bg-green-700">
          Checkout = ${totalPrice?.toFixed(2)}
        </button>
      </Link> */}
      </div>
      <div className="flex flex-col md:w-2/5">
        <table className="  grow table-fixed text-very-dark-blue">
          <tbody class="  justify-center bg-slate-100">
            <tr>
              <td>Price</td>
              <td>${totalPrice?.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>tax</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${totalPrice?.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/cart">
          <button className=" w-full rounded-md bg-green-primary py-4 text-white transition-all hover:bg-green-700">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CartInfo;
