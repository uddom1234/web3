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
<div>
<Header/>
<main>
<div class="container flex space-x-10">
    <div class="small-container flex-1 bg-white-300 rounded h-72">
        <h1 class="italic font-bold text-xl underline">Small Container</h1>
    </div>
    <div class="big-container flex-2 bg-gray-500 relative rounded-lg big-container-height">
        <div class="scrolling-content">
            Big Container - Scrolling content <br/>
            Line 1 <br/>
            Line 2 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>

            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>

            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>
            Line 3 <br/>

            Line 3 <br/>
            Line 3 <br/>

            Line 3 <br/>
            Line 3 <br/>

            Line 3 <br/>
            Line 3 <br/>

            Line 100 <br/>
        </div>
    </div>
</div>
</main>
</div>
)}

export default HomePage;
