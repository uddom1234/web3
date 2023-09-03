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
import FormUpload from "../components/FormUpload";

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
      }, 700); // Initial delay 700ms
    }, []);

    return (
      <div className="flex flex-col min-h-screen">
      <Header/>
      <Box className="flex-grow mt-24 p-12">
          <Grid container spacing={5}>
              <Grid item xs={6} md={7}>
                  <div className="w-full">
                      <h1 className="text-xl sm:text-md md:text-xl lg:text-6xl xl:text-9xl 2xl:text-9lg font-normal italic mb-4">Welcome to</h1> {/* Welcome text */}
                      <h1 className={`font-mono text-amber-400 text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-9xl 2xl:text-9lg font-bold mb-4 
                          transition duration-60000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>BlockHub</h1> {/* Fade in when the HomePage loaded */}
                  </div>
              </Grid>
              <Grid item xs={6} md={5}>
              <Grid container spacing={8}>
              <Grid item xs={4} md={4}>
                  <div className="group w-full h-full relative hover:bg-blue-100 p-2 rounded-2xl"> {/* Drop down as a block that show description and picture*/}
                  <a href="/browse" className="group">
                          <button className="px-4 py-2 text-md font-bold bg-blue-700 hover:bg-blue-950 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform group-hover:scale-105">
                              Start Trading
                          </button>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2 text-center"><p>Start your trading journey here.</p> {/* Drop down as a block that show description and picture*/}
                          <img src="../../trading.png" alt="image" className="w-full h-auto"/>
                          </div>
                      </a>
                  </div>
              </Grid>
              <Grid item xs={4} md={4}>
              <div className="group w-full h-full relative hover:bg-blue-100 p-2 rounded-2xl"> {/* Drop down as a block that show description and picture*/}
                <button onClick={openModal} className="px-4 py-2 text-md font-bold bg-blue-700 hover:bg-blue-950 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform group-hover:scale-105">
                    Upload Assets
                </button>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2 text-center">
                  <p>Earn income by selling your blockchain assets.</p>
                  <img src="../../upload.png" alt="image" className="w-full h-auto"/>
                </div>
              </div>

              {/* modal for displaying upload */}
              <Upload
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Upload Asset"
              >
                  <FormUpload/>
              </Upload>
                    
          
              </Grid>
              <Grid item xs={4} md={4}>
                  <div className="group w-full relative hover:bg-blue-100 p-2 rounded-2xl"> {/* Drop down as a block that show description and picture*/}
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
              </a>{/* change color to yellow when hovered*/}
              <a href="/login" className="flex items-center justify-center px-8 py-4 text-lg font-bold bg-blue-500 hover:bg-amber-400 text-white rounded-full w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                  Log In
              </a>{/* change color to yellow when hovered*/}
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
