import { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CloseIcon from "@/components/icons/CloseIcon";
import useClickOutside from "@/hooks/useClickOutside";

const NavLinks = (props) => {
  const { cartItems } = useContext(useGeneralContext);
  const cart = cartItems.length ? true : false;

  const divRef = useClickOutside(() => handleCloseMenu());
  const isOpenMenu = props.isOpenMenu;
  const setIsOpenMenu = props.setIsOpenMenu;
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <nav
      ref={divRef}
      className={` mx-auto flex flex-col bg-white font-bold text-green-primary md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4  md:p-0  ${
        isOpenMenu
          ? "z-9 fixed top-0 left-0 flex h-full w-2/5 flex-col gap-y-[1px]  p-5  md:p-8"
          : "hidden"
      }`}
    >
      <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
        <CloseIcon />
      </button>
      <NavLinkHeader text="Home" />
      {/* <NavLinkHeader text="Products" /> */}
      <NavLinkHeader text="Cart" />
      <NavLinkHeader text="Contact" />
    </nav>
  );
};
export default NavLinks;
