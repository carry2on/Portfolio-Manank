import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Logo from "../../assets/LOgo.png"

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  
  const toggleMenu = () => {
    openMenu(!menu);
    setShowmenu(!showMenu);
  };

  return (
    <nav className="bg-[#404F8B] flex flex-wrap justify-between md:items-center text-white px-10 md:px-20">
      <div className="w-24 h-24">
        <img src={Logo} alt="" srcset="" />
      </div>
      
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="hover:text-orange-300 text-lg transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="hover:text-orange-300 text-lg transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="hover:text-orange-300 text-lg transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="hover:text-orange-300 text-lg transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;