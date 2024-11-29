import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const queryHandle = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={queryHandle}>
      <input
        type="text"
        value={query}
        placeholder="Search for a movie..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
