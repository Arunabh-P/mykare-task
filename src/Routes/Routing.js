import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Screens/HomePage/Home";

import Login from "../Screens/LoginPage/Login";

import Signup from "../Screens/Signup/Signup";

const Routing = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Home />} />


      </Routes>
      
    </BrowserRouter>
  )
}

export default Routing