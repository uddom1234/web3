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
      }}    >
      <strong className="text-2xl font-bold">{asset.name}</strong> -{" "}
      <span className="text-black">{asset.category}</span>
      <br />
      <span className="">Price: {asset.price}</span>,
      <span className="">Staked: {asset.staked}</span>,
      <span className="">Rewards: {asset.rewards}</span>,
      <span className="">Balance: {asset.balance}</span>
    </li>
      </>  

    )}

export default AssetItem;
