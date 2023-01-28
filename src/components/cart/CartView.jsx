import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";

import DeleteIcon from "@/components/icons/DeleteIcon";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cartItems, deleteAllCartItems, deleteCartItems, totalPrice, user } =
    useContext(useGeneralContext);

  return (
    <section className=" mx-auto min-h-screen max-w-7xl bg-white px-4 md:text-base">
      <div className=" mx-4 rounded-md bg-white shadow-md">
        <h4 className=" px-6 py-2 text-lg font-bold text-green-primary">
          Carrito
        </h4>
        <h1 className=" ml-8">{user?.name}</h1>
        <hr />
        <div className=" text-left text-slate-500 ">
          Borrar todos
          <button className=" mx-4" onClick={() => deleteAllCartItems([])}>
            <DeleteIcon className="hover:fill-green-primary" />
          </button>
        </div>
        {cartItems.length === 0 && (
          <p className="py-16 text-center">El carrito está vacío</p>
        )}
        {cartItems.map((item) => (
          <article
            key={item?._id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4 "
          >
            <Link className=" " to={`/products/${item._id}`}>
              <img
                src={item?.imagesMain[0]}
                alt=""
                className="min-w-[100px] rounded-md"
              />
            </Link>
            <div>
              <h6>{item?.title}</h6>
              <p className=" hidden md:block">{item?.description}</p>
              <div>
                <span>
                  ${item?.price * (1 - item?.discount)} x {item?.quantity}
                </span>
                <span className=" font-bold">
                  {" "}
                  = {item?.price * (1 - item?.discount) * item?.quantity}
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
            <Link to="/shipping">
              <button className=" w-full rounded-md bg-green-primary py-4 text-white transition-all hover:bg-green-700">
                Pago y envío = COP
                {Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                })
                  .format(totalPrice)
                  .slice(0, -3)}
              </button>
            </Link>
          </div>
        )}
      </div>
      <form>
        <script
          src="https://checkout.epayco.co/checkout.js"
          class="epayco-button"
          data-epayco-key="491d6a0b6e992cf924edd8d3d088aff1"
          data-epayco-amount="50000"
          data-epayco-name="Vestido Mujer Primavera"
          data-epayco-description="Vestido Mujer Primavera"
          data-epayco-currency="cop"
          data-epayco-country="co"
          data-epayco-test="true"
          data-epayco-external="false"
          data-epayco-response="https://ejemplo.com/respuesta.html"
          data-epayco-confirmation="https://ejemplo.com/confirmacion"
          data-epayco-methodconfirmation="get"
        >
          holiwis
        </script>
      </form>
    </section>
  );
};

export default CartView;
