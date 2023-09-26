import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/doctor/Doctors";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Doctordetails from "../pages/doctor/Doctordetails";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Login />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<Doctordetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
