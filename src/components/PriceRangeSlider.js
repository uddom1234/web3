import React from "react";

const PriceRangeSlider = ({ value, onChange }) => {
  return (
    <div className="bg-gray-200 px-3 py-2 mt-3 rounded" >
      <h3 className="">Price Range: ${value}</h3>
      <input
        type="range"
        min="0"
        max="1000000" // Adjust the maximum value as needed
        step="10000"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        class="w-full slider"
      />
    </div>
  );
}

export default PriceRangeSlider;
