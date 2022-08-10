import React, { useState } from 'react';

import { Link, useNavigate } from "react-router-dom"

import "../LoginPage/Login.css"

function Signup() {

    let navigate = useNavigate();

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    var auth = JSON.parse(localStorage.getItem('auth'))

    const handleSubmit = () => {
        if (auth === null) {
            auth = [{ 'name': 'aaaaa', 'email': 'aaaaa', 'password': 'aaaaa' }];
        }

        if (password === confirmPassword) {

            const same = auth.filter(usersList => usersList.email === email)

            if (same.length === 0) {
                auth = [...auth, { 'name': name, 'email': email, 'password': password }];
                localStorage.setItem('auth', JSON.stringify(auth));
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/');

            } else {
                alert(name + ' exist!')
            }

        } else {
            alert('Passwords are not matching')
        }
    }


    return (

        <div className='login-screen'>
            <div className='login-and-register-form'>

                <form action="" className='login-form'>
                    <h3 className='dashboard-login'>dashboard Register</h3>

                    <div className='mb-4 mt-4'>
                        <input type="text" className='input-email-password'
                            value={name} onChange={e => setName(e.target.value)}
                            placeholder='Enter Name' />

                    </div>

                    <div className='mb-4 mt-4'>
                        <input type="email" className='input-email-password'
                            value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' />

                    </div>

                    <div className="mb-4">
                        <input type="password" className='input-email-password'
                            value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
                    </div>

                    <div className="mb-4">
                        <input type="password" className='input-email-password'
                            value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Re-enter Password' />
                    </div>

                    <div className="mb-4">
                        <input type="submit" onClick={handleSubmit} value={'Register'} className='input-submit' />
                    </div>

                    <p className='create-account-text'>Or sign in account?  <Link className="link-style-none" to="/login">Login</Link></p>

                </form>
            </div>

        </div>
    )
}

export default Signup