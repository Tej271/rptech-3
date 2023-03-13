import React from "react";
import RPLogo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";

function NavBar() {
  return (
    <div className="flex flex-row justify-around p-[2%]">
      {/* Brand Logo */}
      <div>
        <img src={RPLogo} alt={"rp-logo"} width={120} />
      </div>

      {/* Menu Items and Search Icon */}
      <div className="flex flex-row justify-evenly items-center w-[50%] text-white text-lg">
        {["Business", "Career", "About us", "Media", "Contact"].map(
          (menuItem, index) => (
            <h1
              className="font-normal peer decoration-white underline-offset-4 decoration-4 cursor-pointer"
              key={index}
            >
              {menuItem}
              <div className="hidden peer-hover:block bg-gradient-to-r from-pink-500 to-purple-500 leading-[2px]">
                &nbsp;
              </div>
            </h1>
          )
        )}
        <BsSearch />
      </div>
    </div>
  );
}

export default NavBar;
