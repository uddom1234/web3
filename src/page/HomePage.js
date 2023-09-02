import React, { useEffect, useState } from "react";
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
import Upload from "../components/Upload";

const HomePage = () => {

    const [isMounted, setIsMounted] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

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
            <div className="group w-full h-full relative hover:bg-blue-100 p-2 rounded-2xl">
            <a href="/browse" className="group">
                    <button className="px-4 py-2 text-md font-bold bg-blue-700 hover:bg-blue-950 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform group-hover:scale-105">
                        Start Trading
                    </button>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2 text-center"><p>Start your trading journey here.</p>
                    <img src="../../trading.png" alt="image" className="w-full h-auto"/>
                    </div>
                </a>
            </div>
        </Grid>
        <Grid item xs={4} md={4}>
        <div className="group w-full h-full relative hover:bg-blue-100 p-2 rounded-2xl">
                    <button onClick={openModal} className="px-4 py-2 text-md font-bold bg-blue-700 hover:bg-blue-950 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform group-hover:scale-105">
                        Upload Assets
                    </button>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2 text-center">
                    <p>Earn income by selling your blockchain assets.</p>
                    <img src="../../upload.png" alt="image" className="w-full h-auto"/>
                    </div>
                    </div>
                    <Upload
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Upload Asset"
            >
                    <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Asset Name:</label>
            <input className="mt-1 p-2 border rounded-md w-full" type="text" name="assetName" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price:</label>
            <input className="mt-1 p-2 border rounded-md w-full" type="number" name="price" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category:</label>
            <input className="mt-1 p-2 border rounded-md w-full" type="text" name="category" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Upload Images:</label>
            <input className="mt-1 p-2 border rounded-md w-full" type="file" name="images" multiple />
          </div>

          {/* Add more form fields for crypto-related information */}
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
        </form>
            </Upload>
               
     
        </Grid>
        <Grid item xs={4} md={4}>
            <div className="group w-full relative hover:bg-blue-100 p-2 rounded-2xl">
            <a href="/history" className="group">
                    <button className="px-4 py-2 text-md font-bold bg-blue-700 hover:bg-blue-950 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform group-hover:scale-105">
                     View History
                    </button>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2 text-center">
                    <p>View full history of your blockchain transactions.</p>
                    <img src="../../history.png" alt="image" className="w-full h-auto"/>
                    </div>
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
        <a href="/signup" className="flex items-center justify-center px-8 py-4 text-lg font-bold bg-blue-500 hover:bg-amber-400 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up
        </a>
        <a href="/login" className="flex items-center justify-center px-8 py-4 text-lg font-bold bg-blue-500 hover:bg-amber-400 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
            Log In
        </a>
            <div className="w-full pt-20">
                <img src="../../homepage_2.jpg" alt="image" className="w-full h-auto"/>
            </div>
        </div>
      </Grid>
      </Grid>
</Box>
<Footer/>
</div>
)}

export default HomePage;
