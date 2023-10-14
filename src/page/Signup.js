import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import Box from '@mui/material/Box';
import Footer from "../components/Footer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [isMounted, setIsMounted] = React.useState(false);
    const [error, setError] = useState()
    //animation for text
    React.useEffect(() => {
        setTimeout(() => {
          setIsMounted(true);
        }, 700); // Initial delay
      }, []);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0); 
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

    // Handler for the email field
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    // Handler for the username field
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };

    // Handler for the password field
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    // Handler for the age field
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };
  
    // Handler for the gender field
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
  

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevents the default action of form submission
        setError('');

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        if (!email || !username || !password || !age || !gender) {
            setError("All fields are required.");
            return;
        }
        
        const user = {
            email,
            username,
            password,
            age,
            gender, 
        };

        try {
          // Send a request to backend service
          const response = await axios.post('http://localhost:8000/register/', user);
          console.log(response.data);
          // Navigate to login page 
          navigate('/login');
        } catch (error) {
            console.error("There was an error while sending the data!", error);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
        
                // Parse the error message from the backend response
                let errorMessage = "An error occurred: Please try again.";
                if (error.response.status === 400) {
                    const errorData = error.response.data;
                    if (errorData.email) {
                        errorMessage = errorData.email;
                    } else if (errorData.username) {
                        errorMessage = errorData.username;
                    } else {
                        errorMessage = "Bad request: Please check your input fields.";
                    }
                } else if (error.response.status === 500) {
                    errorMessage = "Internal server error: Please try again later.";
                }
                setError(errorMessage); // Set the error message to state
            } else if (error.request) {
                console.log(error.request);
                setError("No response from the server: Please check your internet connection.");
            } else {
                console.log('Error', error.message);
                setError("An error occurred while setting up the request: Please try again.");
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
                    <img src="../../signup.png" alt="image" className="w-1/3 mx-auto mb-10"/>
                        <h1 className="text-4xl font-bold uppercase text-blue-600">Sign Up With Email</h1>
                    </div>
                    <form className="w-full max-w-sm mx-auto" onSubmit={handleSignup}>
                            <div className="mb-4">
                                <TextField 
                                    fullWidth 
                                    label="Email" 
                                    variant="outlined"
                                    value={email}
                                    onChange={handleEmailChange} 
                                />
                            </div>
                            <div className="mb-4">
                                <TextField 
                                    fullWidth 
                                    label="Username" 
                                    variant="outlined"
                                    value={username}
                                    onChange={handleUsernameChange} 
                                />
                            </div>
                            <div className="mb-4">
                                <TextField 
                                    fullWidth 
                                    label="Password" 
                                    type="password" 
                                    variant="outlined"
                                    value={password}
                                    onChange={handlePasswordChange} 
                                />
                            </div>
                            <div className="mb-4">
                            <TextField 
                                fullWidth 
                                label="Age" 
                                variant="outlined"
                                value={age}
                                onChange={handleAgeChange}
                                type="number"  // Ensures only numeric input
                                InputProps={{ inputProps: { min: 1 } }}  // minimum value
                            />
                            </div>
                            <div className="mb-4">
                                <TextField 
                                    fullWidth 
                                    label="Gender" 
                                    variant="outlined"
                                    select   
                                    value={gender}
                                    onChange={handleGenderChange} 
                                >
                                    {/* Dropdown options */}
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                </TextField>
                            </div>
                            <div className="mb-4">
                                    <Button     
                                        fullWidth 
                                        variant="contained" 
                                        color="primary" 
                                        type="submit"
                                    >
                                    Connect with BlockHub
                                    </Button>
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="text-red-500 text-lg ">{error}</p>
                                </div>

                                
                                <div className="text-center">
                                    <Link to="/login"> {/* Take to log in page if user have an account*/}
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