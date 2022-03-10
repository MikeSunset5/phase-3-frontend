import React from "react";

function Search({searchText, handleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Dogs:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
