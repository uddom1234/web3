import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Header from "../components/Header";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../style/homepage.css";

const HomePage = () => {
    return (
        <div class="flex h-72 space-x-4">
    <div class="small-container flex-1 bg-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold text-black underline">
        Small Container
        </h1>
        <h1 className="text-3xl italic underline">testing </h1>
    </div>
    <div className="big-container flex-2 bg-gray-500 relative rounded-lg big-container-height">
      <div class="scrolling-content">
        big container<br></br>
        line 1 <br></br> 
        line 2 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>

        line 3 <br></br>
        line 3 <br></br>
        variantline 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
        line 3 <br></br>
      </div>  
    </div>
</div>

    )}

export default HomePage;
