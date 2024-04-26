import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 flex h-fit items-center justify-between bg-white py-5">
        <h3 className="font-Poppins text-xl font-bold text-gray-500 md:text-3xl">
          h<span className="text-green_light">REMIND</span>
        </h3>
        <div className="hidden gap-6 font-Inter font-medium text-gray-600 md:flex">
          <Link to="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" className={pathname === "/about" ? "active" : ""}>
            About hREMIND
          </Link>
          <Link
            to="/howitworks"
            className={pathname === "/howitworks" ? "active" : ""}
          >
            How it works
          </Link>
          <Link
            to="/support"
            className={pathname === "/support" ? "active" : ""}
          >
            Contact support
          </Link>
        </div>

        <button className="bg-green_dark hidden rounded-md px-7 py-2 text-center font-bold text-white md:block">
          Let's get Started
        </button>

        {isOpen ? (
          <MobileNavMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pathname={pathname}
          />
        ) : (
          <IoMdMenu
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
