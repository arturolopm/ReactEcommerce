import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "@/context/useGeneralContext";

const PaymentForm = () => {
  const { cartItems, savePaymentMethod, paymentMethod } =
    useContext(useGeneralContext);
  // Use the useState hook to manage the paymentMethod state
  const [paymentMethodForm, setPaymentMethodForm] = useState(paymentMethod);
  const navigate = useNavigate();
  // Define a submitHandler function to handle the form submission
  const submitHandler = (event) => {
    event.preventDefault();
    savePaymentMethod({ paymentMethodForm });
    navigate("/place-order");
  };

  return (
    <>
      <h2 className="mx-auto mt-10 mb-4 text-center text-3xl font-bold text-green-primary">
        Metodo de pago
      </h2>
      {cartItems.length == 0 ? (
        <div className=" mx-auto flex h-[69vh] w-full justify-center bg-slate-100">
          <h2 className="mx-auto mt-10 mb-4 text-center text-lg font-bold text-dark-grayish-blue">
            EL carrito no puede estar vacio para proceder al pago
          </h2>
        </div>
      ) : (
        <div className="h-88 container mx-auto mt-10 mb-20 flex max-w-md flex-wrap justify-center bg-slate-100">
          {/* Render the payment form */}
          <form
            className="flex w-full max-w-sm flex-col gap-4 rounded-md bg-white p-8 shadow-md"
            onSubmit={submitHandler}
          >
            <div className="mb-2 block text-sm font-bold text-gray-700">
              Metodo de pago
            </div>
            <label>
              <input
                id="paypal"
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethodForm === "paypal"}
                onChange={(event) => setPaymentMethodForm(event.target.value)}
              />
              Paypal
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethodForm === "creditCard"}
                onChange={(event) => setPaymentMethodForm(event.target.value)}
              />
              Tarjeta
            </label>

            <button
              className="hover:bg-green-secondary focus:bg-green-secondary mt-6 w-full rounded-full bg-green-primary py-2 px-4 text-white shadow-md focus:outline-none"
              type="submit"
            >
              Proseguir al pago
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
