import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex h-fit items-center justify-between py-5 ">
        <h3 className="font-Poppins text-3xl font-bold text-gray-500">
          h<span className="text-green_light">REMIND</span>
        </h3>
        <div className="flex gap-6 font-Inter font-medium text-gray-600">
          <Link
            to="/"
            className={pathname === "/" && "text-green_light font-bold"}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={pathname === "/about" && "text-green_light font-bold"}
          >
            About hREMIND
          </Link>
          <Link
            to="/howitworks"
            className={
              pathname === "/howitworks" && "text-green_light font-bold"
            }
          >
            How it works
          </Link>
          <Link
            to="/support"
            className={pathname === "/support" && "text-green_light font-bold"}
          >
            Contact support
          </Link>
        </div>
        <button className="bg-green_dark rounded-md px-7 py-2 text-center font-bold text-white">
          Let's get Started
        </button>
      </div>
    </>
  );
};

export default Navbar;
