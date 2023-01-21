import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

import { Link } from "react-router-dom";
import logoJade from "@/assets/images/logo.svg";
import MenuIcon from "@/components/icons/MenuIcon";

import CartHeader from "@/components/header/CartHeader";
import ProfileMenu from "@/components/header/ProfileMenu";
import NavLinks from "@/components/header/NavLinks";
import SearchProduct from "@/components/header/SearchProduct";
import { useParams } from "react-router";
const IndexHeader = () => {
  const params = useParams();
  window.scroll(0, 0);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const handleShowLogo = () => {
    window.innerWidth < 768 ? setShowLogo(!showLogo) : "";
  };
  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleScrollUp = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    setIsOpenMenu(false);
  }, [params]);

  return (
    <div>
      <header className="  container relative z-10 mx-auto flex items-center gap-8 p-4 md:p-0">
        <button
          className=" text-3xl text-slate-500 md:hidden"
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </button>
        {showLogo && (
          <Link to="/">
            <img
              className=" mx-4 mr-auto mb-1 h-10 md:mr-5"
              src={logoJade}
              alt="Logo Jade"
            />
          </Link>
        )}

        <NavLinks isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

        <div className=" right-0 w-[25%] text-base text-very-dark-blue">
          <SearchProduct handleShowLogo={handleShowLogo} />
        </div>
        <div className=" ml-auto flex gap-4">
          <CartHeader />
          <ProfileMenu />
        </div>
      </header>
      <span className="container mx-auto mb-2 h-[1px] w-full bg-gray-500 md:block"></span>
      <div className=" fixed bottom-5 right-5 z-50  text-5xl text-green-primary">
        <a href="https://wa.me/573114483981?text=I'm%20interested%20in%20your%20Jade%20figures">
          <FaWhatsapp />
        </a>
      </div>

      <div
        onClick={handleScrollUp}
        className=" fixed bottom-20 right-5 z-50 hidden  text-5xl text-slate-500 md:block"
      >
        <RxDoubleArrowUp />
      </div>
    </div>
  );
};

export default IndexHeader;
