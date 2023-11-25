import React from "react";

const Price: React.FC<{}> = () => {
  const handlePriceChange = (minPrice: number, maxPrice: number) => {
    // Update the value in localStorage
    console.log("price_range", `${minPrice},${maxPrice}`)
    localStorage.setItem("price_range", `${minPrice},${maxPrice}`);
    
  };

  return (
    <div>
      <h3 className="sidebar-title price-title">
        <span className="sidebarTitle">Price </span>
      </h3>

      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onChange={() => handlePriceChange(0, 9999999)} // Set your min and max price values
        />
        <span className="checkmark"></span>All
      </label>
      <br />
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onChange={() => handlePriceChange(0, 15000)}
        />
        <span className="checkmark"></span>$0 - $15000
      </label>
      <br />
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onChange={() => handlePriceChange(15000, 30000)}
        />
        <span className="checkmark"></span>$15000 - $30000
      </label>
      <br />
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onChange={() => handlePriceChange(30000, 9999999)} // You can set a large value for Infinity
        />
        <span className="checkmark"></span>$30000+
      </label>
    </div>
  );
};

export default Price;
