import React from "react";
import { useState } from "react";
import logo from "../../assets/logo_1.png";
import HeaderItem from "./HeaderItem";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

function Header() {
  const [toggle, settoggle] = useState(false);
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
      <div className="flex items-center gap-8">
        <img className=" w-20 md:w-30  object-cover" src={logo} alt="Logo" />
        <div className="hidden   md:flex gap-8">
          {navItems.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {navItems.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />,
          )}
          <div className="md:hidden" onClick={() => settoggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] px-5 pb-4 border-gray-700 p-3">
                {navItems.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    ),
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        className="w-10 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfHFYAIt_r3AZQoNa-GwPlUpCkcBZ8kFaZA&s"
        alt="profile"
      />
    </div>
  );
}

export default Header;
