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
  const { payOrder } = useContext(useGeneralContext);
  const [itemsInOrder, setItemsInOrder] = useState();
  const getItemsInOrder = async () => {
    await setItemsInOrder(orderPlaced?.orderItems);
  };

  const [clientId, setClientId] = useState();
  const addPayPalScript = async () => {
    const { data: getClientId } = await axios.get("/api/config/paypal");
    setClientId(getClientId);
  };

  useEffect(() => {
    addPayPalScript();
  }, []);
  const [priceToPaypal, setPriceToPaypal] = useState();

  useEffect(() => {
    getItemsInOrder();
    if (orderPlaced) {
      const priceExist = "totalPrice" in orderPlaced;
      priceExist ? setPriceToPaypal(orderPlaced.totalPrice.toFixed(2)) : "";
    }
  }, [orderPlaced]);
  // addPayPalScript();
  // newPriceToPaypal();

  const successPaymentHandler = () => {
    payOrder(id);
    setGetOrderPaid(!getOrderPaid);
    Swal.fire("Order Processed!", "Your order is on its way!", "success");
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
            actions.redirect(`/${orderPlaced._id}`);
          }}
          style={{ layout: "vertical", shape: "rect" }}
        />
      );
    }
  }, [priceToPaypal]);

  return (
    <div className=" mx-auto flex max-w-5xl flex-col gap-4 md:flex-row">
      <div className=" mx-4 max-w-3xl rounded-md bg-white text-sm shadow-md md:w-3/5">
        <h4 className=" px-6 py-2 text-lg font-bold ">Items ordered</h4>
        {orderPlaced?.isPaid ? (
          <p className=" text-base font-bold text-green-primary">
            Your order is on its way!
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
                  ${(item?.price * (1 - item?.discount)).toFixed(2)} x{" "}
                  {item.quantity}
                </span>
                <span className=" font-bold">
                  {" "}
                  = $
                  {(
                    item?.price *
                    (1 - item?.discount) *
                    item?.quantity
                  )?.toFixed(2)}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-col md:w-2/5">
        <table className="  grow table-fixed text-very-dark-blue">
          <tbody className="  justify-center bg-slate-100">
            {/* <tr>
              <td>Price</td>
              <td>${orderPlaced?.totalPrice?.toFixed(2)}</td>
            </tr> */}
            <tr>
              <td>Shipping</td>
              <td>${orderPlaced?.shippingPrice.toFixed(2)}</td>
            </tr>
            <tr>
              <td>tax</td>
              <td>${orderPlaced?.taxPrice?.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${orderPlaced?.totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        {clientId && (
          <div>
            {!orderPlaced?.isPaid && (
              <PayPalScriptProvider options={{ "client-id": clientId }}>
                {showButtons}
              </PayPalScriptProvider>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default CartInfoDetails;
