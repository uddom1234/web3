import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AssetItem from "../components/AssetItem";
import ReusableSelect from "../components/Filter";
import PriceRangeSlider from "../components/PriceRangeSlider";
import Upload from "../components/Upload";
import FormUpload from "../components/FormUpload";
import axios from 'axios';

const Browse = () => {
  // Example categories and assets data
  const categories = [
    { value: "1", label: "Art" },
    { value: "2", label: "Collectibles" },
    { value: "4", label: "Cryptocurrency" },
    { value: "5", label: "NFT" },
    { value: "3", label: "Real Estate" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedListings, setSelectedListings] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allAssets, setAllAssets] = useState([]);
  const [displayedAssets, setDisplayedAssets] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/asset')
    .then((response) => {
        setAllAssets(response.data);
        setDisplayedAssets(response.data);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });
  }, []);

  useEffect(() => {
    let filteredAssets = allAssets.filter(asset => 
        (selectedCategory === "" || asset[4] == selectedCategory) &&
        (selectedPrice === "" || (asset[3] <= selectedPrice)) &&
        (searchTerm === "" || asset[1].toLowerCase().includes(searchTerm.toLowerCase()))
    );
  
    // Apply the listing filter after other filters:
    if (selectedListings !== "") {
        filteredAssets = filteredAssets.slice(0, parseInt(selectedListings));
    }
  
    setDisplayedAssets(filteredAssets);
  }, [selectedCategory, selectedPrice, searchTerm, allAssets, selectedListings]);

return (
  <div className="flex flex-col min-h-screen">
    <Header/>
    <Box className="flex-grow mt-24 p-12">
      <Grid container spacing={3}>
        <Grid item xs={12}> 
          <div>              {/* Search bar*/}
              <input 
                className='w-full border p-2 rounded-lg border-dashed border-gray-400 hover:shadow transition duration-300 ease-in-out focus:bg-gray-200 focus:border-transparent focus:outline-none'
                type="text"
                placeholder="Search assets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
          </div>
        </Grid>

        <Grid item xs={5} lg={3}>
          <Paper elevation={3} className="p-4">
            <h2>Filtering Options</h2>
            <div>
              <h3>Category</h3>
              <ReusableSelect
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                options={[
                  { value: "", label: "All Categories" },
                  // Assuming you have a 'categories' variable or similar
                  ...categories,
                ]}
              />
            
              <PriceRangeSlider
                value={selectedPrice}
                onChange={(newValue) => setSelectedPrice(newValue)}
              />

              <h3 className="mt-2">Listings</h3>
              <ReusableSelect
                value={selectedListings}
                onChange={(e) => setSelectedListings(e.target.value)}
                options={[
                  { value: "", label: "All Listings" },
                  { value: "3", label: "3 Listing" },
                  { value: "5", label: "5 Listings" },
                ]}
              />
            </div>
          </Paper>

          <button
            className="my-10 border border-black w-full p-5 rounded-lg hover:shadow-lg transition 3s bg-blue-700 hover:bg-blue-400 text-white font-bold"
            onClick={openModal}
          >
            Upload Asset
          </button>

          <Upload
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Upload Asset"
          >
              <FormUpload/>
          </Upload>
        </Grid>

        <Grid item xs={7} lg={9}>
          <Paper elevation={3} className="p-8">
            <ul>
              {displayedAssets.map((asset) => (
                <AssetItem key={asset[0]} asset={asset} />
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>

    <Footer/>
  </div>
);
}

export default Browse;
