import { useContext, useEffect, useState } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import axios from "axios";

import { useParams } from "react-router-dom";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { Link } from "react-router-dom";
const CartInfoDetails = (props) => {
  const { user } = useContext(useGeneralContext);
  const { id } = useParams();
  // get Order Placed
  const [orderPlaced, setOrderPlaced] = useState();
  console.log(orderPlaced);
  const [orderPlacedError, setOrderPlacedError] = useState();
  const getOrderPlaced = async (id) => {
    const config = {
      method: "get",
      url: `http://localhost:5000/api/orders/${id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios(config)
      .then(function (response) {
        setOrderPlaced(response.data);

        // console.log(response.status);
        if (response.status === 201) {
          setOrderPlacedError("");
        }
      })
      .catch(function (error) {
        setOrderPlacedError(error.message);
        console.log(orderPlacedError);
      });
  };
  useEffect(() => {
    getOrderPlaced(id);
    console.log(id);
  }, [id]);

  const [itemsInOrder, setItemsInOrder] = useState();
  const getItemsInOrder = async () => {
    await setItemsInOrder(orderPlaced.orderItems);
  };
  useEffect(() => {
    getItemsInOrder();
  }, [orderPlaced]);

  return (
    <div className=" mx-auto flex max-w-5xl flex-col gap-4 md:flex-row">
      <div className=" mx-4 max-w-3xl rounded-md bg-white text-sm shadow-md md:w-3/5">
        <h4 className=" px-6 py-2 text-lg font-bold ">Items ordered</h4>
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

        <button
          // onClick={HandleGetOrder}
          className=" w-full rounded-md bg-green-primary py-4 text-white transition-all hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
export default CartInfoDetails;
