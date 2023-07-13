import React, { useContext, useEffect, useState } from "react";

import { SidebarContext } from "../contexts/SidebarContext";

import { CartContext } from "../contexts/CartContext";

import { BsBag } from "react-icons/bs";

import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-red-400" : "bg-blue-400"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="text-white text-2xl">Shopping Mart</div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px]"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center text-white">
            {" "}
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
