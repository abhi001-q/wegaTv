import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
      <Icon className="text-xl" />
      <h2 className="hidden md:block">{name}</h2>
    </div>
  );
}

export default HeaderItem;