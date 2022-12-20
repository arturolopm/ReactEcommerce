import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import { Link } from "react-router-dom";
const LoggedView = () => {
  const { logOut, user } = useContext(useGeneralContext);

  return (
    <>
      <h1 className=" mb-3 text-lg font-bold text-green-primary">
        {user?.name}
      </h1>
      <Link to="/home" className="group relative hover:text-green-primary">
        Home, products
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <a href="#" className=" group relative hover:text-green-primary">
        History purchase
        <span className="absolute bottom-0 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </a>
      <a href="#" className="group relative hover:text-green-primary">
        Edit profile
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </a>
      <form action="login" method="post"></form>

      <div className=" text-right">
        <Link to="/login">
          <button
            onClick={logOut}
            className=" h-6 w-3/5 rounded-md bg-dark-grayish-blue text-white transition-all hover:bg-green-700"
          >
            Log Out
          </button>
        </Link>
      </div>
    </>
  );
};
export default LoggedView;
