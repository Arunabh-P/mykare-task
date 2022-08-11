import React from 'react';

import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

const Navbar = () => {

    let navigate = useNavigate();

    const userlogout = () => {
        localStorage.removeItem("userlogined")
        navigate("/login");
        toast.success('Successfully Logged Out!', {
          position: "bottom-right",
      })
    }

  return (
    <nav class="navbar navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white">Mykare</a>
    <form class="d-flex">
      <button class="btn btn-outline-light" onClick={userlogout} type="submit">Logout</button>
    </form>
  </div>
</nav>
  )
}

export default Navbar