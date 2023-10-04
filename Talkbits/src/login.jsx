import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

function Login ()  {
  const [name,setName]=useState();
  const[password,setPassword]=useState();
  const navigate= useNavigate()

  const handleSubmit = (e) => {
   e.preventDefault()
    axios.post('http://localhost:3001/login',{name,password})
    .then (result => {
      console.log(result)
      if(result.data ==="success"){
        navigate('/home')
      }
    })
    .catch(err=> console.log(err))
  }

    return (
      <div
        style={{
          color: '#4BB991',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Center vertically
          backgroundColor: '#4BB991', // Background color for the whole page
        }}
      >
        <div
          style={{
            width: '300px',
            padding: '20px',
            border: '2px solid #000',
            borderRadius: '10px', // Rounded corners
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 2, 0.1)', // Drop shadow
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          <form>
            <div style={{ marginBottom: '15px',color:"black" }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete='name'
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '15px' ,color:"black"}}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#4BB991', // Mint green background
                  color: 'white', // White text color
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Login
              </button>
            </div>
          </form>
          <p style={{ textAlign: 'center', marginTop: '10px',color:"black" }}>
            Don't have an account? {''}
            <Link to='/'style={{ border: 'none', background: 'none', color: '#4BB991', cursor: 'pointer' }}>Signup</Link>
          </p>
        </div>
      </div>
    );
  };
  export default Login;


