import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "@/context/useGeneralContext";

import Home from "@/components/home/Home";

const ShippingForm = () => {
  const { cartItems, saveShippingAddress, shippingAddress, user } =
    useContext(useGeneralContext);
  // Use the useState hook to manage the name, email, password, and passwordConfirmation state
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [state, setState] = useState(shippingAddress.state);
  const [country, setCountry] = useState(shippingAddress.country);
  const [email, setEmail] = useState(user?.email || shippingAddress.email);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const navigate = useNavigate();
  // Define a submitHandler function to handle the form submission
  const submitHandler = (event) => {
    event.preventDefault();
    saveShippingAddress({ address, city, postalCode, state, country, email });
    navigate("/payment");
  };

  return (
    <>
      <h1 className="mx-auto mt-5 mb-4 text-center text-3xl font-bold text-green-primary md:mt-10">
        Delivery Address
      </h1>
      {cartItems.length == 0 ? (
        <div className=" mx-auto flex h-[69vh] w-full justify-center bg-slate-100">
          <h1 className="mx-auto mt-10 mb-4 text-center text-lg font-bold text-dark-grayish-blue">
            Cart can not be empty to process delivery
          </h1>
        </div>
      ) : (
        <div className="h-88 container mx-auto mt-10 mb-10 flex max-w-md flex-wrap justify-center bg-slate-100 p-5">
          {/* Render the register form */}
          <form
            className="flex w-full max-w-sm flex-col rounded-md bg-white p-8 shadow-md"
            onSubmit={submitHandler}
          >
            {/* address input field */}
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Address
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            {/* city input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              City
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />

            {/* postal code input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Postal Code (optional)
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
            />
            {/* State input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              State
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="State"
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
            {/* country input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Country
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="Country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />

            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Contact Email
            </label>

            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Contact phone (optional)
            </label>

            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="number"
              placeholder="phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            {/* Register button */}
            <div className="mt-8">
              <button
                className="focus:shadow-outline-primary w-full rounded-md bg-green-primary py-2 px-4 text-center text-white hover:bg-green-700 focus:outline-none"
                type="submit"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ShippingForm;
