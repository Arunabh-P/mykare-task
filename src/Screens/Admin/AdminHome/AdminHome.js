import React, {useEffect}  from 'react'
import { useNavigate } from "react-router-dom"

const AdminHome = () => {

    let navigate = useNavigate();

    const adminlogout = () => {

        localStorage.removeItem("adminLogined")
        navigate("/admin");
    }

    useEffect(() => {

        const adminInfo = localStorage.getItem("adminLogined")
        
        if(adminInfo){
            navigate('/admin/home')
        }else{
            navigate("/admin")
        }
       
    }, [navigate])

  return (

    <button onClick={adminlogout}>logout</button>

  )
}

export default AdminHome