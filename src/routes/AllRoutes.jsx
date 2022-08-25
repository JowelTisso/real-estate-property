import React from "react";
import { Routes, Route } from "react-router-dom";
import Favourite from "../pages/Favourite/Favourite";
import Home from "../pages/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/favourite"} element={<Favourite />} />
    </Routes>
  );
};

export default AllRoutes;
