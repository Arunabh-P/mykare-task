import React, { useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import hello from "../../Images/hello.gif";

import Navbar from '../../Components/Navbar/Navbar';

import "./Home.css";


const Home = () => {

    let navigate = useNavigate();


    useEffect(() => {

        const userInfo = localStorage.getItem("userlogined")
        if (userInfo) {
            navigate('/')
        } else {
            navigate("/login")
        }

    }, [navigate])

    return (

        <>
            <Navbar />
            <div className='home-page'>
                <img className='home-img' src={hello} alt="hello" />
            </div>
        </>
    )
}

export default Home