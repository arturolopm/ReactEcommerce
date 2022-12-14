import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";

import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { login, user } = useContext(useGeneralContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Create Account
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
