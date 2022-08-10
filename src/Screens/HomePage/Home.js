import React, {useEffect}  from 'react'
import { useNavigate } from "react-router-dom"

import "./Home.css"


const Home = () => {

    let navigate = useNavigate();

    const userlogout = () => {
        localStorage.removeItem("userlogined")
        navigate("/login");
    }

    useEffect(() => {
        const userInfo = localStorage.getItem("userlogined")
        if(userInfo){
            navigate('/')
        }else{
            navigate("/login")
        }
       
    }, [navigate])

    return (
        <div>
            <button onClick={userlogout}>logout</button>
        </div>
    )
}

export default Home