import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "../components/Add";
import Body from "../components/Body";
import Edit from "../components/Edit";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Body />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default Root;
