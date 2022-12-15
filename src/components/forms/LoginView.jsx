import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";

import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { login, loginError } = useContext(useGeneralContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className=" container top-2/4 mx-auto flex min-h-[80vh] max-w-4xl flex-wrap content-center justify-center border border-solid bg-slate-100 px-4 ">
      <form className="  top-8 border-2 py-8" onSubmit={submitHandler}>
        {loginError && <h1>{loginError.message}</h1>}
        <input
          className=" mb-4 w-full border-b-2"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" mb-4 w-full border-b-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className=" text-right">
          <button
            className=" h-6 w-2/5 rounded-md bg-green-primary text-white transition-all hover:bg-green-700"
            type="submit"
          >
            Login
          </button>
        </div>
        <p>
          <Link
            className=" text-green-primary"
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
          >
            or Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
