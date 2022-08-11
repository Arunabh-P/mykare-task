import React, { useState } from 'react';

import { Link, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

import "../LoginPage/Login.css";

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

        //validation

        if (name=="") {
            toast.error(' name field is requred!',{
                position: "bottom-right",
            });
        } else if (email ==""){
            toast.error('email field is requred',{
                position: "bottom-right",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres',{
                position: "bottom-right",
           });
        } else if (password === "") {
            toast.error('password field is requred',{
               position: "bottom-right",
           });
        } else if (password.length < 5) {
            toast.error('password length greater five',{
               position: "bottom-right",
           });

        } else if (password === confirmPassword) {

            const same = auth.filter(usersList => usersList.email === email)

            if (same.length === 0) {
                auth = [...auth, { 'name': name, 'email': email, 'password': password }];
                localStorage.setItem('auth', JSON.stringify(auth));
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/');
                toast.success('Successfully Registered, Please login to continue!',{
                    position:  "bottom-right",
                })

            } else {
                toast.error(name + ' exist!',{
                    position:  "bottom-right",
                })
            }

        } else {
            toast.error('Passwords are not matching',{
                position:  "bottom-right",
            })
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