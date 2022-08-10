import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminHome from "../Screens/Admin/AdminHome/AdminHome";

import AdminLogin from "../Screens/Admin/AdminLogin/AdminLogin";

import Home from "../Screens/HomePage/Home";

import Login from "../Screens/LoginPage/Login";

import Signup from "../Screens/Signup/Signup";

const Routing = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* user */}

        <Route path="/login" element={<Login />} />


        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Home />} />

        {/* admin */}

        <Route path="/admin/home" element={<AdminHome />} />

        <Route path="/admin" element = {<AdminLogin />} />

      </Routes>
      
    </BrowserRouter>
  )
}

export default Routing