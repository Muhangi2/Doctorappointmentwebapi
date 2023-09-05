import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import Doctordetails from "../pages/Doctors/Doctordetails";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<Doctordetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routers;
