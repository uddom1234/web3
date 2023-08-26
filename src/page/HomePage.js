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
<div class="container flex space-x-10 m-24 border-solid">
    <main className="container mx-auto p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to BlockHub</h2>
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"> {/*Trade Now, go to browser page */}
          <div className="bg-white p-4 rounded shadow"> 
            <h3 className="font-semibold">Start Trading</h3>
            <p>Some content here.</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow"> {/*Upload assets*/}
            <h3 className="font-semibold">Upload Assets</h3>
            <p>Some content here.</p>
          </div>

          <div className="bg-white p-4 rounded shadow"> {/**View Trading History */}
            <h3 className="font-semibold">View History</h3>
            <p>Some content here.</p>
          </div>
        </section>  
    </main>
</div>

</div>
)}

export default HomePage;
