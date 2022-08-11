import React from 'react'

import { useNavigate } from "react-router-dom"

import { toast } from 'react-toastify';

const AdminNavbar = () => {

    let navigate = useNavigate();

    const adminlogout = () => {

        localStorage.removeItem("adminLogined")
        
        navigate("/admin");

        toast.success('Successfully Logged Out!', {
            position: "bottom-right",
        })

    }

    return (
        <div>
            <nav class="navbar navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white">Mykare Admin-Panel</a>
                    <form class="d-flex">
                        <button class="btn btn-outline-light" onClick={adminlogout} type="submit">Logout</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar