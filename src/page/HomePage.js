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
    <Grid container spacing={5}>
        <Grid item xs={6} md={7}>
            <div className="w-full">
            <h1 className="text-xl sm:text-md md:text-xl lg:text-6xl xl:text-9xl 2xl:text-9lg font-normal italic mb-4">Welcome to</h1>
            <h1 className={`font-mono text-amber-400 text-xl sm:text-md md:text-xl lg:text-9xl xl:text-9xl 2xl:text-9lg font-bold mb-4 
  transition duration-60000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>BlockHub</h1>
            </div>
        </Grid>
        <Grid item xs={6} md={5}>
        <Grid container spacing={8}>
        <Grid item xs={4} md={4}>
            <div className="w-full">
            <a href="/browse" className="group">
                    <button className="px-4 py-2 text-md font-bold bg-blue-700 hover:bg-blue-950 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform group-hover:scale-105">
                        Start Trading
                    </button>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity mt-2">Start your trading journey here.</p>
                </a>
            </div>
        </Grid>
        <Grid item xs={4} md={4}>
        <div className="w-full">
            <a href="/browse" className="group">
                    <button className="px-4 py-2 text-md font-bold bg-blue-700 hover:bg-blue-950 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform group-hover:scale-105">
                        Upload Assets
                    </button>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity mt-2">Earn income by selling your blockchain assets.</p>
                </a>
            </div>
        </Grid>
        <Grid item xs={4} md={4}>
            <div className="w-full">
            <a href="/browse" className="group">
                    <button className="px-4 py-2 text-md font-bold bg-blue-700 hover:bg-blue-950 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform group-hover:scale-105">
                        Trasaction History
                    </button>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity mt-2">View full history of all blockchain transactions.</p>
                </a>
            </div>
        </Grid>
    </Grid>
      </Grid>
      <Grid item xs={6} md={7}>
        <div className="w-3/4">
            <img src="../../background.png" alt="image" className="w-full h-auto"/>
        </div>
      </Grid>
      <Grid item xs={6} md={5}>
        <div className="w-full">
        <button className="px-8 py-4 text-lg font-bold bg-blue-500 hover:bg-amber-400 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up
        </button>
        <button className="px-8 py-4 text-lg font-bold bg-blue-500 hover:bg-amber-400 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
            Log In
        </button>
        </div>
      </Grid>
      </Grid>
</Box>
<Footer/>
</div>
)}

export default HomePage;
