import { useEffect, useState, useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const CartInfoDetails = ({
  orderPlaced,
  setOrderPlaced,
  orderPlacedError,
  id,
  getOrderPaid,
  setGetOrderPaid,
}) => {
  const { payOrder, setOrder } = useContext(useGeneralContext);
  const [itemsInOrder, setItemsInOrder] = useState();
  const getItemsInOrder = async () => {
    await setItemsInOrder(orderPlaced?.orderItems);
  };

  const [clientId, setClientId] = useState();
  const addPayPalScript = async () => {
    const { data: getClientId } = await axios.get("/api/config/paypal");
    setClientId(getClientId);
  };
  const [EPAYCOCLIENTID, setEPAYCOCLIENTID] = useState();
  const addEPAYCOSCRIPT = async () => {
    const { data: getEPAYCOCLIENTID } = await axios.get("/api/config/epayco");
    setEPAYCOCLIENTID(getEPAYCOCLIENTID);
  };

  useEffect(() => {
    addPayPalScript();
  }, []);
  useEffect(() => {
    addEPAYCOSCRIPT();
  }, []);

  const [priceToPaypal, setPriceToPaypal] = useState();

  useEffect(() => {
    getItemsInOrder();
    if (orderPlaced) {
      const priceExist = "totalPrice" in orderPlaced;
      priceExist ? setPriceToPaypal(orderPlaced.totalPrice) : "";
    }
  }, [orderPlaced]);

  const successPaymentHandler = () => {
    payOrder(id);
    setGetOrderPaid(!getOrderPaid);
    Swal.fire("Order Procesada!", "Tu orden va en camino!", "success");
    setOrder();
  };
  const [showButtons, setShowButtons] = useState();

  useEffect(() => {
    if (priceToPaypal === undefined) {
      setShowButtons(<div>loading</div>);
    } else {
      setShowButtons(
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: `${priceToPaypal}`,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            // alert("Transaction completed by " + name);

            successPaymentHandler();
            // actions.redirect(`/${orderPlaced._id}`);
          }}
          style={{ layout: "vertical", shape: "rect" }}
        />
      );
    }
  }, [priceToPaypal]);

  return (
    <div className=" mx-auto flex max-w-5xl flex-col gap-4 md:flex-row">
      <div className=" mx-4 max-w-3xl rounded-md bg-white text-sm shadow-md md:w-3/5">
        <h4 className=" px-6 py-2 text-lg font-bold ">Articulos ordenados</h4>
        {orderPlaced?.isPaid ? (
          <p className=" text-base font-bold text-green-primary">
            To orden va en camino!
          </p>
        ) : (
          ""
        )}
        {orderPlacedError && <h2>{orderPlacedError}</h2>}
        <hr />

        {itemsInOrder?.map((item) => (
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
                  ${item?.price * (1 - item?.discount)} x {item.quantity}
                </span>
                <span className=" font-bold">
                  {" "}
                  = ${item?.price * (1 - item?.discount) * item?.quantity}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-col shadow-md md:w-2/5">
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
                  .format(orderPlaced?.totalPrice)
                  .slice(0, -3)}
              </td>
            </tr>
            <tr>
              <td>Envío</td>
              <td>$COP{orderPlaced?.shippingPrice}</td>
            </tr>
            <tr>
              <td>IVA</td>
              <td>$COP{orderPlaced?.totalPrice * 0.19}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>
                COP
                {Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                })
                  .format(orderPlaced?.totalPrice)
                  .slice(0, -3)}
              </td>
            </tr>
          </tbody>
        </table>
        {clientId && (
          <div>
            {/* {!orderPlaced?.isPaid &&
              {
                <PayPalScriptProvider options={{ "client-id": clientId }}>
                {showButtons}
              </PayPalScriptProvider> 
              }} */}
          </div>
        )}
      </div>
    </div>
  );
};
export default CartInfoDetails;
