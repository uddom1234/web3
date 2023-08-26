import React from "react";

const ReusableSelect = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-gray-200 p-2 rounded w-full"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default ReusableSelect;
