import React, { useState } from "react";
import style from '../style/Login.module.css'
import Layout from "./Layout";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import toast, { Toaster } from 'react-hot-toast';
function Login() {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigate=useNavigate()
const cookies = new Cookies();
async function handleLogin(e){
  try {
    e.preventDefault();
    const result =await axios.post('http://localhost:4000/adminRegister/Login',{
      email,
      password
     })
     if(result.status===200){
       cookies.set('admin',result.data.data)
        navigate('/dashboard')
       }
  } catch (error) {  
    toast.error(error.response.data.error,{
      position: "top-right",
    })
  } 
  
    
}
  return (
    <div>
    <Layout>
    <center>
          <div className={`${style.main}`}>  
        <h1>Admin Login</h1>
        <h3>Enter your login credentials</h3>
        <form onSubmit={(e)=>handleLogin(e)}>
          <label className={style.label}  htmlFor="email">Email:</label>
          <input className={style.input}
            type="email"
            id="eamil"
            name="email"
            placeholder="Enter your Email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <label className={style.label} htmlFor="password">Password:</label>
          <input className={style.input} 
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <div className={style.wrap}>
            <button className={style.button} type="submit" >
              Submit
            </button>
            <Toaster />
          </div>
        </form>
        <p>
          Not registered?
          <a href="#" style={{ textDecoration: "none" }}>
            Create an account
          </a>
        </p>
      
      </div>
      </center>

      </Layout>
    </div>
  );
}

export default Login;
