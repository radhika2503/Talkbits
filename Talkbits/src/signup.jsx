import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Signup() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate()


  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
        })

      .catch(err=> console.log(err))

  };

  return (
    <div
      style={{
        color: '#4BB991',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Center vertically
        backgroundColor: '#4BB991', 
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
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px',color:'black' }}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              style={{ width: '100%' }}
              onChange={(e) => setName(e.target.value)}

            />
          </div>
          <div style={{ marginBottom: '15px', color:'black' }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              style={{ width: '100%' }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '15px' ,color:'black'}}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              style={{ width: '100%' }}
              onChange={(e) => setPassword(e.target.value)}

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
              Submit
            </button>
          </div>
        </form>
        <p style={{ textAlign: 'center', marginTop: '10px', color:'black' }}>
          Already have an account?{' '}
          <Link to='/login'style={{ border: 'none', background: 'none', color: '#4BB991', cursor: 'pointer' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
