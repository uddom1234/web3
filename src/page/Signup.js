import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Header from "../components/Header";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import "../style/homepage.css";
import Footer from "../components/Footer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = () => {
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
                    <img src="../../signup.png" alt="image" className="w-1/3 mx-auto mb-10"/>
                        <h1 className="text-4xl font-bold uppercase text-blue-600">Sign Up With Email</h1>
                    </div>
                        <form className="w-full max-w-sm mx-auto">
                        <div className="mb-4">
                                    <TextField 
                                        fullWidth 
                                        label="Email" 
                                        variant="outlined" 
                                    />
                                </div>
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
                                    <Link to="/">
                                    <Button     
                                        fullWidth 
                                        variant="contained" 
                                        color="primary" 
                                        type="submit"
                                    >
                                    Connect with BlockHub
                                    </Button>
                                    </Link>
                                </div>
                                
                                {/* incase you do not have an account */}
                                <div className="text-center">
                                    <Link to="/login">
                                        <Button color="secondary">
                                            Already have an account?
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

export default Signup;