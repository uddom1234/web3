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

const HomePage = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        setIsMounted(true);
      }, 700); // Initial delay of 100ms, adjust as needed
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
    <Grid container spacing={5}>
        <Grid item xs={6} md={7}>
            <div className="w-full border">
            <h1 className="text-xl sm:text-md md:text-xl lg:text-6xl xl:text-9xl 2xl:text-9lg font-thin italic mb-4">Welcome to</h1>
            <h1 className={`text-xl sm:text-md md:text-xl lg:text-9xl xl:text-9xl 2xl:text-9lg font-bold mb-4 
  transition duration-20000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>BlockHub</h1>
            </div>
        </Grid>
        <Grid item xs={6} md={5}>
        <Grid container spacing={8}>
        <Grid item xs={4} md={4}>
            <div className="w-full border">
            <a href="/browse"> 
                <h2 className="text-md font-semibold">Start Trading</h2>
            </a>
            </div>
        </Grid>
        <Grid item xs={4} md={4}>
            <div className="w-full border">
            <h2 className="text-md font-semibold">Upload Assets</h2>
            </div>
        </Grid>
        <Grid item xs={4} md={4}>
            <div className="w-full border">
            <a href ="/history">
            <h2 className="text-md font-semibold">View History</h2>
            </a>
            </div>
        </Grid>
    </Grid>
      </Grid>
      <Grid item xs={6} md={7}>
        <div className="w-full border">
            <h2 className="text-md font-semibold">Picture</h2>
        </div>
      </Grid>
      <Grid item xs={6} md={5}>
        <div className="w-full border">
            <h2 className="text-md font-semibold">Log In/Sign Up</h2>
        </div>
      </Grid>
      </Grid>
</Box>
<Footer/>
</div>
)}

export default HomePage;
