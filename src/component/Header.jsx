import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="flex justify-center space-x-[980px] items-center h-[80px] font-bold text-[#4D869C]">
        <Link to="" className="text-3xl">
          LOGO
        </Link>
        <Link to="about" className="text-sm">
          About Me
        </Link>
      </nav>
    </div>
  );
}

export default Header;
