import React from "react";
import Sidbar from "./Sidbar";
import { Outlet } from "react-router-dom";

const RootLyout = () => {
  return (
    <div className="w-[1280px]  mx-auto flex">
      <Sidbar />
     <Outlet/>
    </div>
  );
};

export default RootLyout;
