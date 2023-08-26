import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Header from "./components/Header";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const HomePage = () => {
    


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
  
 
            <Grid item xs={12}>
            </Grid>
        </Grid>

    )}

export default HomePage;
