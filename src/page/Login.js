import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import Box from '@mui/material/Box';
import Footer from "../components/Footer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    //animation for text

    React.useEffect(() => {
      setTimeout(() => {
        setIsMounted(true);
      }, 700); // Initial delay
    }, []);

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
                        <form className="w-full max-w-sm mx-auto"> {/* Textfield for entering credentials*/}
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
                                    <Link to='/'> {/* Pressing login will go back to Homepage*/}
                                    <Button     
                                        fullWidth 
                                        variant="contained" 
                                        color="primary" 
                                        type="submit"
                                    >
                                    Log In
                                    </Button>
                                    </Link>
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