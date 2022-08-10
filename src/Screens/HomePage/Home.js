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
        <div className='home-page'>
            <div className='home-content'>
                <h1>Hello here is home page</h1>

            <button onClick={userlogout}>logout</button>
            </div>
        </div>
    )
}

export default Home