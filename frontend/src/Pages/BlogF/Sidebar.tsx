import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import LogoImg from "./images/sidebarPic.jpg";
import "./search"


const Sidebar: React.FC<{}> = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="sidebar" style={{ width: "10px" }}>
      <div className="sidebarItem">
        <img src={LogoImg} alt="" />
        <span className="sidebarTitle">Updates</span>
        <Link to="/write" type="button" className="btnn">
          Create a post
        </Link>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Farming</li>
          <li className="sidebarListItem">Vegetables</li>
          <li className="sidebarListItem">Agrotech</li>
          <li className="sidebarListItem">Milk</li>
          <li className="sidebarListItem">Green</li>
          <li className="sidebarListItem">Business</li>
        </ul>
      </div>

      {/* Search Box */}
      <div className="sidebarItem">
        <span className="sidebarTitle">Search</span>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        <Link to="/search" type="button" className="btnn" onClick={handleSearch}>
          Search
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
