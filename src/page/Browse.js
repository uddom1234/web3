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
import Upload from "../components/Upload";

const Browse = () => {
  // Example categories and assets data
  const categories = ["Category 1", "Category 2", "Category 3"];
  const assets = [
    { id: 1, name: "Asset 1", category: "Category 1", price: 100, staked: 50, rewards: 10, balance: 200, logoUrl: 'https://plus.unsplash.com/premium_photo-1680397095052-39959b44a604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2980&q=80' },
    { id: 2, name: "Asset 2", category: "Category 2", price: 150, staked: 30, rewards: 5, balance: 100, logoUrl: 'https://images.unsplash.com/photo-1639603683079-7398c604497a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80'},
    { id: 3, name: "Asset 3", category: "Category 3", price: 400, staked: 20, rewards: 4, balance: 300, logoUrl: 'https://images.unsplash.com/photo-1656523864170-d4a1b4a263b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80'},
    { id: 4, name: "Asset 4", category: "Category 1", price: 450, staked: 10, rewards: 3, balance: 400, logoUrl: 'https://plus.unsplash.com/premium_photo-1677487978441-5c92fb475e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80'},

  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedListings, setSelectedListings] = useState("");
  const [selectedPopularTrade, setSelectedPopularTrade] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
