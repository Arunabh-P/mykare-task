import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

const AdminLogin = () => {

  let navigate = useNavigate();

  const [userName, setUserName] = useState('');

  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (userName === 'admin' && password === "admin") {
      localStorage.setItem('adminLogined', userName);
      setUserName('');
      setPassword('');
      navigate('/admin/home');
    }else{
      toast.error('Wrong Details!', {
        position: "bottom-right",
    })
    }
  }

  useEffect(() => {
    try {
        const adminInfo = localStorage.getItem("adminLogined")

        if (adminInfo) {
            navigate("/admin/home")
        }else{
          navigate("/admin")
        }

    } catch (error) {

        console.log(error);

    }

}, [])


  return (
    <div className='login-screen'>
      <div className='login-and-register-form'>

        <form action="" className='login-form'>
          <h3 className='dashboard-login'>Admin login</h3>

          <div className='mb-4 mt-4'>
            <input type="text" name='username' className='input-email-password'
              value={userName} onChange={e => setUserName(e.target.value)} placeholder='Enter User Name' />

          </div>
          <div className="mb-4">
            <input type="password" name='password' className='input-email-password'
              value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
          </div>
          <div className="mb-4">
            <input type="submit" value={'sign in'} onClick={handleLogin} className='input-submit' />
          </div>

        </form>


      </div>

    </div>
  )
}

export default AdminLogin