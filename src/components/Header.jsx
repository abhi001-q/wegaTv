import React from "react";
import logo from "../assets/logo_1.png";
import HeaderItem from "./HeaderItem";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

function Header() {
  const navItems = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    { name: "ORIGINALS", icon: HiStar },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div>
      <img className=" w-20 md:w-30  object-cover" src={logo} alt="Logo" />

      {navItems.map((item) => (
        <HeaderItem name={item.name} Icon={item.icon} />
      ))}
    </div>
  );
}

export default Header;
