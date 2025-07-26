import { MenuIcon } from "lucide-react";
import React from "react";

const MobileNav = ({ onToggle }) => {
  return (
    <div
      className="bg-transparent w-full lg:hidden md:hidden fixed top-0 left-0 p-2 shadow z-50
    "
    >
      <MenuIcon onClick={onToggle} />
    </div>
  );
};

export default MobileNav;
