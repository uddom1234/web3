import React from 'react';

const FormUpload = () => {
  return (

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

          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
            </form>
  );
};

export default FormUpload;

