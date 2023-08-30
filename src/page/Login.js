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

const Login = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        setIsMounted(true);
      }, 700); // Initial delay
    }, []);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <Box className="flex-grow mt-24 p-12">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <div className='w-full'>
                        
                    </div>    
                </Grid>  

            </Grid>
            
        </Box>

        <Footer/>

    </div>
)}

export default Login;