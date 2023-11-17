import React, { useState } from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "./images/sidebarPic.jpg";
import "./search";

const Sidebar: React.FC<{}> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    localStorage.setItem("searchpost", searchTerm);
    navigate("/search");
  };

  const handleCategoryClick = (category: string) => {
    console.log(`Clicked on category: ${category}`);
    localStorage.setItem("searchpost", category);
    navigate("/search");
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
          <li
            className="sidebarListItem"
            onClick={() => handleCategoryClick("Farming")}
          >
            Farming
          </li>
          <li
            className="sidebarListItem"
            onClick={() => handleCategoryClick("Vegetables")}
          >
            Vegetables
          </li>
          <li
            className="sidebarListItem"
            onClick={() => handleCategoryClick("Agrotech")}
          >
            Agrotech
          </li>
          <li
            className="sidebarListItem"
            onClick={() => handleCategoryClick("Milk")}
          >
            Milk
          </li>
          <li
            className="sidebarListItem"
            onClick={() => handleCategoryClick("Green")}
          >
            Green
          </li>
          <li
            className="sidebarListItem"
            onClick={() => handleCategoryClick("Business")}
          >
            Business
          </li>
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

          {/* Call handleSearch and set the link directly */}
          <button
            type="button"
            className="btnn"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
