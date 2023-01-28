import React, { useState, useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import Swal from "sweetalert2";
import LoginView from "@/components/forms/LoginView";

const ProfileForm = () => {
  const { updateProfile, user, updateProfileError } =
    useContext(useGeneralContext);
  // Use the useState hook to manage the name, email, password, and passwordConfirmation state
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
    } else {
      // Validate the form values and create the new user account
      setPasswordError(""); // Reset password error if passwords match
      updateProfile({ name, email, password });
      setPassword("");
      setPasswordConfirmation("");
    }
  };

  return (
    <>
      {/* Welcome heading */}
      <h1 className="mx-auto mt-10 mb-2 text-center text-3xl font-bold text-green-primary">
        Bienvenido
      </h1>
      <h2 className="mx-auto mt-1 mb-4 text-center text-base font-bold text-green-primary">
        Puedes modificar los detalles de tu perfil aqui
      </h2>

      {!user ? (
        <div className=" mx-auto flex h-[69vh] w-full justify-center bg-slate-100">
          <div className="flex h-fit w-full max-w-sm flex-col rounded-md bg-white p-8 shadow-md">
            <LoginView />
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
            {updateProfileError && ( // If there is a password error, render the error message
              <div className="my-2 text-sm font-bold text-red-600">
                {updateProfileError}
              </div>
            )}
            {/* Name input field */}
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Nombre
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder={user?.name}
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
              placeholder={user?.email}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            {/* Password input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Nueva contraseña
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* Password confirmation input field */}
            <label className="mt-4 mb-2 block text-sm font-bold text-gray-700">
              Confirmar nueva contraseña
            </label>
            <input
              className="focus:shadow-outline-primary w-full appearance-none rounded-md py-2 px-3 leading-tight text-gray-700 focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              required
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
            {/* Update button */}
            <div className="mt-8">
              <button
                className="focus:shadow-outline-primary w-full rounded-md bg-green-primary py-2 px-4 text-center text-white hover:bg-green-700 focus:outline-none"
                type="submit"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ProfileForm;
