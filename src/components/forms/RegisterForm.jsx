import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useGeneralContext } from "@/context/useGeneralContext";
// Import the LoggedView component
import LoggedView from "@/components/header/LoggedView";

const RegisterForm = () => {
  const { register, user, registerError } = useContext(useGeneralContext);
  // Use the useState hook to manage the name, email, password, and passwordConfirmation state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState(""); // Add state to track password error

  // Define a submitHandler function to handle the form submission
  const submitHandler = (event) => {
    event.preventDefault();
    // Validate the form values and create the new user account
    if (password !== passwordConfirmation) {
      // Check if passwords match
      setPasswordError("Passwords do not match"); // Set password error if passwords do not match
    } else {
      // Validate the form values and create the new user account
      setPasswordError(""); // Reset password error if passwords match
      register({ name, email, password });
    }
  };

  return (
    <>
      {/* Welcome heading */}
      <h1 className="mx-auto mt-10 mb-4 text-center text-3xl font-bold text-green-primary">
        Welcome
      </h1>
      {user ? (
        <div className=" mx-auto flex h-[69vh] w-full justify-center bg-slate-100">
          <div className="flex h-fit w-full max-w-sm flex-col rounded-md bg-white p-8 shadow-md">
            <LoggedView />
          </div>
        </div>
      ) : (
        <div className="h-88 container mx-auto mt-10 mb-20 flex max-w-md flex-wrap justify-center bg-slate-100">
          {/* Render the register form */}
          <form
            className="flex w-full max-w-sm flex-col rounded-md bg-white p-8 shadow-md"
            onSubmit={submitHandler}
          >
            {passwordError && ( // If there is a password error, render the error message
              <div className="my-2 text-sm font-bold text-red-600">
                {passwordError}
              </div>
            )}
            {registerError && ( // If there is a password error, render the error message
              <div className="my-2 text-sm font-bold text-red-600">
                {registerError}
              </div>
            )}
            {/* Name input field */}
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {/* Email input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            {/* Password input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* Password confirmation input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Confirm Password
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
            {/* Register button */}
            <div className="mt-8">
              <button
                className="focus:shadow-outline-primary w-full rounded-md bg-green-primary py-2 px-4 text-center text-white hover:bg-green-700 focus:outline-none"
                type="submit"
              >
                Register
              </button>
            </div>
            {/* Link to the login page */}
            <p className="mt-4 text-center text-sm text-gray-600">
              <Link className="font-bold text-green-primary" to="/login">
                or Login
              </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
