import React, { useEffect, useState } from 'react';

import AdminNavbar from '../../../Components/adminNavbar/AdminNavbar';

import { useNavigate } from "react-router-dom";

import { Table } from 'react-bootstrap';

import "./AdminHome.css"

const AdminHome = () => {

    const [user, setUser] = useState()


    const getuser = () => {
        const getUser = JSON.parse(localStorage.getItem('auth'))
        setUser(getUser)
    }


    let navigate = useNavigate();

    useEffect(() => {
        try {
            const adminInfo = localStorage.getItem("adminLogined")

            if (!adminInfo) {
                navigate("/admin")
            }

            getuser()
        } catch (error) {

            console.log(error);

        }



    }, [])

    return (
        <>
            <AdminNavbar />
            <div className='container pt-5'>

            <Table class="admin-table table  table-striped table-responsive-xs table-responsive-sm table-responsive-md  table-striped table-hover mt-3 ">
                <thead>
                    <tr>
                    <th>Sl no</th>

                        <th>name</th>
                        <th>email</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {user && user.slice(1).map((data,index) => (

                        (
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                            </tr>
                        )

                    ))}


                </tbody>
            </Table>

            </div>

        </>
    )
}

export default AdminHome