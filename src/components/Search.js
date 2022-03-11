import React from "react";

function Search({searchText, handleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Filter Dogs:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a size to search..."
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
