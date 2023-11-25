import React, { useState } from "react";
import Category from "./Category";
import Price from "./Price";
import { Link } from "react-router-dom";

const ASidebar: React.FC<{}> = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = () => {
    // Perform the search logic here
    // ...

    // After the search, store the search word in localStorage
    console.log(searchWord);
    localStorage.setItem("search_word", searchWord);
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button type="button" className="btnn" onClick={handleSearch}>
          Search
        </button>
        <br />
        <Category />
        <Price />
      </div>
      <div>
        <span className="sidebarTitle"></span>
        <Link to="/postcreate" type="button" className="btnn">
          Create New Post
        </Link>
      </div>
    </div>
  );
};

export default ASidebar;
