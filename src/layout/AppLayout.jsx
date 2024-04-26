import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
