import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import logoJade from "@/assets/images/logo.svg";
import MenuIcon from "@/components/icons/MenuIcon";

import CartHeader from "@/components/header/CartHeader";
import ProfileMenu from "@/components/header/ProfileMenu";
import NavLinks from "@/components/header/NavLinks";

const IndexHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  return (
    <div>
      <header className="  container relative z-10 mx-auto flex items-center gap-8 p-4 md:p-0">
        <button
          className=" text-3xl text-slate-500 md:hidden"
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </button>
        <Link to="/">
          <img
            className=" mx-4 mr-auto mb-1 h-10 md:mr-5"
            src={logoJade}
            alt="Logo Jade"
          />
        </Link>
        <NavLinks isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
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
    </div>
  );
};

export default IndexHeader;
