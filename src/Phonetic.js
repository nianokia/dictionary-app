import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      {props.phonetic.audio?.length > 0 && (
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="audio"
        >
          <button>▷</button>
        </a>
      )}
      <span className="phoneticText">{props.phonetic.text}</span>
    </span>
  );
}
