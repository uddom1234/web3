import React, { useState } from 'react';

const FormUpload = ({ onUpload }) => {
  const [formData, setFormData] = useState({
    assetName: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'description' && value.length > 100) {
      // Limit the description to 100 characters
      return;
    }

    // Ensure that the price is a positive number and does not exceed 1,000,000
    if (name === 'price') {
      const priceValue = parseInt(value, 10);
      if (!isNaN(priceValue) && priceValue >= 0 && priceValue <= 1000000) {
        setFormData({
          ...formData,
          [name]: priceValue.toString(),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpload(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Asset Name:</label>
        <input
          className="mt-1 p-2 border rounded-md w-full"
          type="text"
          name="assetName"
          value={formData.assetName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description up to 100 characters:</label>
        <textarea
          className="mt-1 p-2 border rounded-md w-full"
          name="description"
          value={formData.description}
          onChange={handleChange}
          maxLength="100" // Added max length attribute
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price:</label>
        <input
          className="mt-1 p-2 border rounded-md w-full"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category:</label>
        <select
          className="mt-1 p-2 border rounded-md w-full"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="1">Art</option>
          <option value="2">Collectibles</option>
          <option value="4">Cryptocurrency</option>
          <option value="5">NFT</option>
          <option value="3">Real Estate</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Image URL:</label>
        <input
          className="mt-1 p-2 border rounded-md w-full"
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormUpload;
