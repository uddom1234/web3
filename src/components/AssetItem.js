import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

const AssetItem = ({ asset }) => {
  return (
    <>
      <li
        key={asset[0]}  // AssetID
        className="text-black border-black border p-4 mb-4 rounded shadow-md hover:shadow-lg transition duration-300"
        style={{
          boxShadow: '-0.5rem -0.5rem black',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0rem 0rem black';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '-0.5rem -0.5rem black';
        }}
      >
        <div className="flex">
          {/* Left side with asset logo and name */}
          <div className="flex items-center mr-6">
            <img
              src={asset[6]}  // Image
              alt={`${asset[1]} Logo`}  // AssetName
              className="w-12 h-12 mr-4 rounded-full"
            />
            <div>
              <strong className="text-2xl font-bold">{asset[1]}</strong> 
              - <span className="text-gray-900">{asset[4]}</span>  
            </div>
          </div>

          {/* Right side with description and other asset details */}
          <div className="flex-grow">
            <div className="mb-3">
              <span className="text-gray-400 font-bold">Description:</span> {asset[2]}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-400">Price:</span> ${asset[3]} 
              </div>
            </div>
          </div>
          <div>
            <button
              className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded transition duration-300"
              onClick={() => {
      // Handle the buy action here
              console.log(`Buy ${asset[1]}`);
              }}
            >
              Buy
            </button>
</div>
        </div>
      </li>
    </>
  );
}

export default AssetItem;