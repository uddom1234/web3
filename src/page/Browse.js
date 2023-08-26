import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AssetItem from "../components/AssetItem";
import ReusableSelect from "../components/Filter";
import PriceRangeSlider from "../components/PriceRangeSlider";

const Browse = () => {
  // Example categories and assets data
  const categories = ["Category 1", "Category 2", "Category 3"];
  const assets = [
    { id: 1, name: "Asset 1", category: "Category 1", price: 100, staked: 50, rewards: 10, balance: 200 },
    { id: 2, name: "Asset 2", category: "Category 2", price: 150, staked: 30, rewards: 5, balance: 100 },
    // Add more assets...
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedListings, setSelectedListings] = useState("");
  const [selectedPopularTrade, setSelectedPopularTrade] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the assets based on selected filters and search term
  const filteredAssets = assets.filter(asset => 
    (selectedCategory === "" || asset.category === selectedCategory) &&
    (selectedPrice === "" || asset.price <= selectedPrice) &&
    (searchTerm === "" || asset.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Box className="flex-grow mt-24 p-12">

        <Grid container spacing={3}>
          {/* Left side for filtering */}
          <Grid item xs={12}>
          <div class=''>
                {/* Search bar */}
                <input 
                  class='w-full border p-2 rounded-lg border-dashed border-gray-400 hover:shadow transition duration-300 ease-in-out focus:bg-gray-200 focus:border-transparent focus:outline-none'
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
                  ...categories.map((category, index) => ({ value: category, label: category })),
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
                  { value: "1", label: "1 Listing" },
                  { value: "5", label: "5 Listings" },
                ]}
              />

              <h3 className="mt-2">Popular Trades</h3>
              <ReusableSelect
                value={selectedPopularTrade}
                onChange={(e) => setSelectedPopularTrade(e.target.value)}
                options={[
                  { value: "", label: "All Trades" },
                  { value: "yes", label: "Popular Trades" },
                  { value: "no", label: "Non-Popular Trades" },
                ]}
              />

                
              </div>
            </Paper>
          </Grid>
          
          {/* Right side for displaying assets */}
          <Grid item xs={7} lg={9}>
            <Paper per elevation={3} style={{backgroundColor: ''}} className="p-8 ">
              <ul>
                {filteredAssets.map((asset) => (
                    <AssetItem asset={asset}/>
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
