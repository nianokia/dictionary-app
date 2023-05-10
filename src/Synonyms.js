import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synomyms">
        {props.synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
