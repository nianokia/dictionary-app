import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [query, setQuery] = useState(props.defaultQuery);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // documentation: https://www.shecodes.io/learn/apis/images
    let imageApiKey = "9733a0bfob8d3b90ab42ae5a571ftfa4";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${query}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h3>What word are you looking for?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultQuery}
              onChange={updateQuery}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
