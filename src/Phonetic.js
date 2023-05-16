import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <button>▷</button>
      </a>
      <span className="phoneticText">{props.phonetic.text}</span>
    </span>
  );
}
