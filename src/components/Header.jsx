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
    <div className="flex items-center  justify-between p-5">
      <div  className="flex items-center gap-8">
        <img className=" w-20 md:w-30  object-cover" src={logo} alt="Logo" />

        {navItems.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img
        className="w-12.5 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfHFYAIt_r3AZQoNa-GwPlUpCkcBZ8kFaZA&s"
        alt="profile"
      />
    </div>
  );
}

export default Header;
