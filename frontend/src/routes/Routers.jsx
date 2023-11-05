import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import Doctors from "../pages/doctors/Doctors";
import Doctorsdetails from "../pages/doctors/Doctorsdetails";
const Routers = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<Doctorsdetails />} />
    </Routes>
  );
};

export default Routers;
