import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import { Link } from "react-router-dom";
const LoggedView = () => {
  const { logOut, user, cartItems } = useContext(useGeneralContext);

  return (
    <>
      <h2 className=" mb-3 text-lg font-bold text-green-primary">
        {user?.name}
      </h2>
      {cartItems.length > 0 && (
        <Link
          to="/shipping"
          className=" group relative mb-2 border-2 border-dashed text-base font-bold text-green-primary"
        >
          Click aqui para terminar tu compra!
          <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 pr-2 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
        </Link>
      )}
      <Link to="/home" className="group relative hover:text-green-primary">
        Home
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <Link to="/order" className=" group relative hover:text-green-primary">
        Historial de órdenes
        <span className="absolute bottom-0 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <Link to="/profile" className="group relative hover:text-green-primary">
        Editar perfil
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>
      <form action="login" method="post"></form>

      <Link
        to="/home"
        className=" group relative my-2 border-2 border-dashed text-base font-bold text-green-primary"
      >
        Ver más productos!
        <span className=" absolute bottom-0 mb-1 block h-[1px] w-full scale-x-0 pr-2 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
      </Link>

      <div className=" text-right">
        <Link to="/login">
          <button
            onClick={logOut}
            className=" h-6 w-3/5 rounded-md bg-dark-grayish-blue text-white transition-all hover:bg-green-700"
          >
            Cerrar sesión
          </button>
        </Link>
      </div>
    </>
  );
};
export default LoggedView;
