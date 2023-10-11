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

const Login = () => {
    const [isMounted, setIsMounted] = React.useState(false);



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


    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(authAction.login());
        navigate('/Browse');

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
                                        label="Username" 
                                        variant="outlined" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <TextField 
                                        fullWidth 
                                        label="Password" 
                                        type="password" 
                                        variant="outlined" 
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
                            </form>   
                    </Grid>  

                </Grid>
                
            </Box>

            <Footer/>

        </div>
    )}

export default Login;