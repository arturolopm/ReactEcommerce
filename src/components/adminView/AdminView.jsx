import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import { Link } from "react-router-dom";
const AdminView = () => {
  const { logOut, user } = useContext(useGeneralContext);

  const doubleCheck = () => (user.isAdmin ? "" : logOut());
  return (
    <>
      <h1 className=" mb-3 text-lg font-bold text-green-primary">
        {user?.name}
      </h1>
      <Link
        to="/create-products"
        className="group relative hover:text-green-primary"
      >
        View and edit products
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <Link
        to="/edit-products"
        className="group relative hover:text-green-primary"
      >
        View and edit products
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <Link to="/home" className="group relative hover:text-green-primary">
        Home
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <Link to="/order" className=" group relative hover:text-green-primary">
        Order History
        <span className="absolute bottom-0 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <Link to="/profile" className="group relative hover:text-green-primary">
        Edit profile
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <form action="login" method="post"></form>

      <Link
        to="/home"
        className=" group relative my-2 border-2 border-dashed text-base font-bold text-green-primary"
      >
        See more products!
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 pr-2 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>

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
export default AdminView;
