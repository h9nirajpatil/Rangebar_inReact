import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const PriceRangeBar = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: parseInt(value, 10),
    }));
  };

  return (
    <div>
      <label>
        Min Price: ${priceRange.min}
        <input
          type="range"
          name="min"
          value={priceRange.min}
          min={0}
          max={100}
          step={1}
          onChange={handleRangeChange}
        />
      </label>

      <label>
        Max Price: ${priceRange.max}
        <input
          type="range"
          name="max"
          value={priceRange.max}
          min={0}
          max={100}
          step={1}
          onChange={handleRangeChange}
        />
      </label>

      {/* Display the selected range */}
      <p>
        Selected Price Range: ${priceRange.min} - ${priceRange.max}
      </p>
    </div>
  );
};

export default PriceRangeBar;
