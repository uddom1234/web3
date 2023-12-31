import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import Box from '@mui/material/Box';
import Footer from "../components/Footer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from "../store/authSlice";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [isMounted, setIsMounted] = React.useState(false);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    // Handler for the email field
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    // Handler for the password field
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    //animation for text
    React.useEffect(() => {
      setTimeout(() => {
        setIsMounted(true);
      }, 700); // Initial delay
    }, []);


    const status = useSelector((state) => state.auth.active)

    useEffect(() => {
        console.log(status)
    }, [status])

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');  // Clear the existing error
  
      if (!email || !password) {
          setError("Both fields are required.");
          return;
      }
  
      try {
          // Post request using axios
          const response = await axios.post('http://localhost:8000/login/', {
              email: email,
              password: password,
          });
  
          dispatch(authAction.login());
          navigate('/Browse');
        
      } catch (error) {
          console.error("There was an error logging in!", error);
          if (error.response && error.response.status === 400) {
              // Handle Bad Request
              setError(error.response.data.detail);
          } else {
              setError("An unexpected error occurred. Please try again.");
          }
      }
  }

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Box className="flex-grow mt-24 p-12">
                <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={12} md={6}>
                    <div className='w-full text-center mb-8'>
                    <img src="../../login.png" alt="image" className="w-1/2 mx-auto mb-10"/> {/* Image*/}
                        <h1 className="text-4xl font-bold uppercase text-blue-600">Login</h1>
                    </div>
                        <form className="w-full max-w-sm mx-auto" onSubmit={handleLogin}> {/* Textfield for entering credentials*/}
                        <div className="mb-4">
                                  <TextField 
                                    fullWidth 
                                    label="Email" // Changed to "Email" because we're using setEmail
                                    variant="outlined"
                                    value={email} // value is controlled by the component's state
                                    onChange={handleEmailChange} // set onChange to the handler
                                  />
                                </div>
                                <div className="mb-4">
                                  <TextField 
                                    fullWidth 
                                    label="Password" 
                                    type="password" 
                                    variant="outlined" 
                                    value={password} // value is controlled by the component's state
                                    onChange={handlePasswordChange} // set onChange to the handler
                                  />
                                </div>
                                <div className="mb-4">
                                    <Button     
                                        fullWidth 
                                        variant="contained" 
                                        color="primary" 
                                        type="submit"
                                    >
                                    Log In
                                    </Button>
                                </div>
                                <div className="text-center">
                                    <Link to="/signup"> {/* Pressing Sign up button take to sign up page*/}
                                        <Button color="secondary">
                                            Sign Up
                                        </Button>
                                    </Link> 
                                </div>
                                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                            </form>   
                    </Grid>  

                </Grid>``
                
            </Box>

            <Footer/>

        </div>
    )}

export default Login;