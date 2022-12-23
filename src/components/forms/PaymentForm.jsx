import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useGeneralContext } from "@/context/useGeneralContext";

const PaymentForm = () => {
  const { cartItems, savePaymentMethod } = useContext(useGeneralContext);
  // Use the useState hook to manage the paymentMethod state
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  // Define a submitHandler function to handle the form submission
  const submitHandler = (event) => {
    event.preventDefault();
    savePaymentMethod({ paymentMethod });
  };

  return (
    <>
      <h1 className="mx-auto mt-10 mb-4 text-center text-3xl font-bold text-green-primary">
        Payment Method
      </h1>
      {cartItems.length == 0 ? (
        <div className=" mx-auto flex h-[69vh] w-full justify-center bg-slate-100">
          <h1 className="mx-auto mt-10 mb-4 text-center text-lg font-bold text-dark-grayish-blue">
            Cart can not be empty to process payment, please go back to home
            screen to add a few
          </h1>
        </div>
      ) : (
        <div className="h-88 container mx-auto mt-10 mb-20 flex max-w-md flex-wrap justify-center bg-slate-100">
          {/* Render the payment form */}
          <form
            className="flex w-full max-w-sm flex-col gap-4 rounded-md bg-white p-8 shadow-md"
            onSubmit={submitHandler}
          >
            <div className="mb-2 block text-sm font-bold text-gray-700">
              Payment Method
            </div>
            <label>
              <input
                id="paypal"
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(event) => setPaymentMethod(event.target.value)}
              />
              Paypal
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={(event) => setPaymentMethod(event.target.value)}
              />
              Credit or Debit Card
            </label>
            <Link to="/place-order">
              <button
                className="hover:bg-green-secondary focus:bg-green-secondary mt-6 w-full rounded-full bg-green-primary py-2 px-4 text-white shadow-md focus:outline-none"
                type="submit"
              >
                Proceed to Payment
              </button>
            </Link>
          </form>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
