import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${query}`);
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word..."
          onChange={updateQuery}
        />
      </form>
    </div>
  );
}
