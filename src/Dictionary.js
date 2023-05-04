import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [query, setQuery] = useState(null);

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleSubmit);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          onChange={updateQuery}
        />
      </form>
    </div>
  );
}
