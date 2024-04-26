import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="border-purple flex h-fit items-center justify-between border-b py-5">
        <h3 className="font-Poppins text-3xl font-bold text-gray-500">
          h<span className="text-blue_100">REMIND</span>
        </h3>
        <div className="flex gap-6 font-medium text-gray-600">
          <Link to="/">Home</Link>
          <Link to="/about">About hREMIND</Link>
          <Link to="/howitworks">How it works</Link>
          <Link to="/">Contact support</Link>
        </div>
        <button className="bg-purple rounded-full px-7 py-2 text-center font-bold text-white">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Navbar;
