import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div>{props.meaning.partOfSpeech}</div>
      <ul>
        {props.meaning.definitions.map((definitions, index) => {
          return (
            <li key={index}>
              <div>
                {definitions.definition}
                <br />
                <em>{definitions.example}</em>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
