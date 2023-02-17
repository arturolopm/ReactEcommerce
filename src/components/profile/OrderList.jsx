import { useContext, useEffect, useState } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";

import { Link } from "react-router-dom";

const OrderList = () => {
  const { orderListed, getOrderListed, user } = useContext(useGeneralContext);

  const [getOrdersList, setGetOrdersList] = useState([]);
  useEffect(() => {
    getOrderListed();
  }, []);
  //   getOrderListed();
  useEffect(() => {
    if (orderListed) {
      setGetOrdersList(orderListed);
    } else {
      setGetOrdersList([]);
    }
  }, [orderListed]);
  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  }

  return (
    <section className="  mx-auto min-h-screen max-w-7xl bg-white px-4 md:text-base">
      <div className=" mx-4 rounded-md bg-slate-50 shadow-md">
        <h4 className=" px-6 py-2 text-lg font-bold text-green-primary">
          Información de las órdenes
        </h4>
        <h2 className=" ml-8 font-bold text-green-primary">{user?.name}</h2>
        <hr />

        {getOrdersList.length === 0 && (
          <p className="py-16 text-center">Aún no hay órdenes</p>
        )}
        {getOrdersList &&
          getOrdersList.map((order) => (
            <Link
              to={`${order._id}`}
              key={order?._id}
              className=" gap-6 px-6 py-4 text-very-dark-blue "
            >
              <div className="flex gap-6">
                <div>{formatDate(order?.updatedAt)}</div>
                {order?.isPaid ? (
                  <div className=" font-bold text-green-primary ">Pagada</div>
                ) : (
                  <div className=" font-bold text-red-500 ">No pagada</div>
                )}

                <div>
                  <div className=" font-bold">${order?.totalPrice}</div>
                </div>
              </div>
              <hr />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default OrderList;
