import React from "react";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <button>▷</button>
      </a>
      <span>{props.phonetic.text}</span>
    </span>
  );
}
