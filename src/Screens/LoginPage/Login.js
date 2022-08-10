import React, { useState } from 'react';

import { Link, useNavigate } from "react-router-dom"

import "./Login.css"
const Login = () => {

    let navigate = useNavigate();


    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');


    var auth = JSON.parse(localStorage.getItem('auth'))

    const handleLogin = () => {
        if (auth === null) {
            alert('No user found')
        }

        const same = auth.filter(usersList => usersList.email === email)

        if (same.length !== 0) {

            if (same[0].password === password) {
                localStorage.setItem('userlogined', email);
                setEmail('');
                setPassword('');
                navigate('/');
            } else {
                alert('Password is wrong!')
            }

        } else {
            alert(email + ' user not exist')
        }

    }


    return (
        <div className='login-screen'>
            <div className='login-and-register-form'>

                <form action="" className='login-form'>
                    <h3 className='dashboard-login'>dashboard login</h3>

                    <div className='mb-4 mt-4'>
                        <input type="email" name='email' className='input-email-password'
                            value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' />

                    </div>
                    <div className="mb-4">
                        <input type="password" name='password' className='input-email-password'
                            value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
                    </div>
                    <div className="mb-4">
                        <input type="submit" value={'sign in'} onClick={handleLogin} className='input-submit' />
                    </div>

                    <p className='create-account-text'>Or create a new account? <Link className="link-style-none" to="/signup">Register</Link></p>

                </form>


            </div>

        </div>

    )
}

export default Login