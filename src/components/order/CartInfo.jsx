import { useContext, useEffect } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@/components/icons/DeleteIcon";
import { Link } from "react-router-dom";
const CartInfo = () => {
  const {
    cartItems,
    deleteCartItems,
    deleteAllCartItems,
    totalPrice,
    placeOrder,
    order,
  } = useContext(useGeneralContext);
  const shippingPrice = totalPrice > 50 ? 0 : 15;
  const taxPrice = totalPrice * 0.19;
  const orderPrice = totalPrice + shippingPrice;

  const navigate = useNavigate();
  const HandlePlaceOrder = () => {
    placeOrder();
  };
  useEffect(() => {
    order ? navigate(`/order/${order._id}`) : "";
  }, [order]);

  return (
    <div className=" mx-auto flex max-w-5xl flex-col gap-4 md:flex-row">
      <div className=" mx-4 max-w-3xl rounded-md bg-white text-sm shadow-md md:w-3/5">
        <h4 className=" px-6 py-2 text-lg font-bold ">Cart</h4>
        <hr />
        <div className=" text-left text-slate-500 ">
          Borrar todos
          <button className=" mx-4" onClick={() => deleteAllCartItems([])}>
            <DeleteIcon className="hover:fill-green-primary" />
          </button>
        </div>
        {cartItems.length === 0 && (
          <p className="py-16 text-center">Tu carrito esta vacío</p>
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
                  {Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })
                    .format(item?.price * (1 - item?.discount))
                    .slice(0, -3)}{" "}
                  x {item.quantity} ={" "}
                </span>
                <span className=" font-bold">
                  {" "}
                  {Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })
                    .format(item?.price * (1 - item?.discount) * item?.quantity)
                    .slice(0, -3)}
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
      </div>
      <div className="flex flex-col md:w-2/5">
        <table className="  grow table-fixed text-very-dark-blue">
          <tbody className="  justify-center bg-slate-100">
            <tr>
              <td>Precio</td>
              <td>
                COP
                {Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                })
                  .format(totalPrice)
                  .slice(0, -3)}
              </td>
            </tr>
            <tr>
              <td>Envío</td>
              <td>COP${shippingPrice}</td>
            </tr>
            <tr>
              <td>IVA</td>
              <td>
                {Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                })
                  .format(taxPrice)
                  .slice(0, -3)}
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td>
                COP
                {Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                })
                  .format(orderPrice)
                  .slice(0, -3)}
              </td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={HandlePlaceOrder}
          className=" w-full rounded-md bg-green-primary py-4 text-white transition-all hover:bg-green-700"
        >
          Crear orden
        </button>
      </div>
    </div>
  );
};
export default CartInfo;
