import React, { useContext, useState } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import { Link } from "react-router-dom";

import AdminView from "@/components/adminView/AdminView";

const LoginForm = () => {
  // Destructure the login, loginError, and user values from the useGeneralContext hook
  const { login, loginError, user } = useContext(useGeneralContext);

  // Use the useState hook to manage the email and password state, and a counter for the number of login attempts
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);

  // Define a submitHandler function to handle the form submission
  const submitHandler = (event) => {
    event.preventDefault();
    login({ email, password });
    // Increment the login attempts counter

    loginError && setAttempts(attempts + 1);
    !loginError && setAttempts(0);
  };

  return (
    <div className=" h-[69vh] w-full bg-slate-100">
      {/* Welcome heading */}
      <h1 className="mx-auto mt-4 mb-4 text-center text-3xl font-bold text-green-primary md:mt-10">
        Welcome
      </h1>
      {/* Form container */}
      <div className="h-88 container mx-auto mt-10 mb-20 flex max-w-md flex-wrap justify-center ">
        {/* If the user is logged in, render the LoggedView component */}
        {user ? (
          <div className="flex w-full max-w-sm flex-col rounded-md bg-white p-8 shadow-md">
            <AdminView />
          </div>
        ) : (
          // If the user is not logged in, render the login form
          <form
            className="flex w-full max-w-sm flex-col rounded-md bg-white p-8 shadow-md"
            onSubmit={submitHandler}
          >
            {/* If there are login attempts, display the number of attempts */}
            {loginError && (
              <p className="mb-4 text-sm font-bold text-red-600">
                {loginError.message}
              </p>
            )}

            {attempts > 0 && (
              <p className="mb-4 text-sm font-bold text-red-600">
                Number of login attempts: {attempts}
              </p>
            )}
            {/* Email input field */}
            <label className="mb-2 block text-sm font-bold text-gray-700">
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
            {/* Login button */}
            <div className="mt-8">
              <button
                className="focus:shadow-outline-primary w-full rounded-md bg-green-primary py-2 px-4 text-center text-white hover:bg-green-700 focus:outline-none"
                type="submit"
              >
                Login
              </button>
            </div>
            {/* Link to the create account page */}
            <p className="mt-4 text-center text-sm text-gray-600">
              <Link className="font-bold text-green-primary" to="/register">
                or Create Account
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
