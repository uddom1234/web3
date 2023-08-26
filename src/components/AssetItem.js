import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";


const AssetItem = ({asset}) => {
    return (
      <>
        <li
  key={asset.id}
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
  <div className="flex items-center mb-3">
    <img
      src={asset.logoUrl} // Replace with the actual logo URL for the asset
      alt={`${asset.name} Logo`}
      className="w-12 h-12 mr-4 rounded-full"
    />
    <div>
      <strong className="text-2xl font-bold">{asset.name}</strong> - <span className="text-gray-900">{asset.category}</span>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <span className="text-gray-400">Price:</span> ${asset.price}
      <br />
      <span className="text-gray-400">Staked:</span> {asset.staked}
    </div>
    <div>
      <span className="text-gray-400">Rewards:</span> {asset.rewards}
      <br />
      <span className="text-gray-400">Balance:</span> {asset.balance}
    </div>
  </div>
</li>

      </>  

    )}

export default AssetItem;
