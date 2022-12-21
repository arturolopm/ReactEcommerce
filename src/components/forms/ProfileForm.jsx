import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import { Link } from "react-router-dom";

const ProfileForm = () => {
  const { logOut, user } = useContext(useGeneralContext);

  return (
    <div className=" container mx-auto flex h-[69vh] max-w-3xl flex-col items-center justify-start p-4 ">
      <div className="flex flex-col items-center ">
        <h1 className="mb-3 text-lg font-bold text-green-primary">
          {user?.name}
        </h1>
        <Link
          to="/orders"
          className="group relative rounded-md bg-green-primary text-white"
        >
          View all orders
          <span className="absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
        </Link>
      </div>
      <div className="container flex flex-col items-center justify-between bg-slate-100 ">
        <div className="mx-auto mb-3 w-full text-base font-medium text-dark-grayish-blue">
          {user?.email}
        </div>
        <div className="flex flex-col items-center justify-between  ">
          <form className=" container mb-5 grid grid-cols-2 ">
            <input type="password" placeholder="New password" />
            <button className=" group relative mr-3 h-6  rounded-md bg-dark-grayish-blue text-white transition-all hover:bg-green-700">
              Update password
              <span className="absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
            </button>

            <input type="email" value={user?.email} />
            <button className="group relative mr-3 h-6  rounded-md bg-dark-grayish-blue text-white transition-all hover:bg-green-700">
              Update email
              <span className="absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
            </button>

            <input type="text" value={user?.name} />
            <button className="group relative mr-3 h-6  rounded-md bg-dark-grayish-blue text-white transition-all hover:bg-green-700">
              Update name
              <span className="absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
            </button>
          </form>
        </div>
      </div>
      <div className="text-right">
        <Link to="/login">
          <button
            onClick={logOut}
            className="h-6 w-full rounded-md bg-dark-grayish-blue text-white transition-all hover:bg-green-700"
          >
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileForm;
