import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div>{props.meaning.partOfSpeech}</div>
      <ul>
        {props.meaning.definitions.map((definitions, index) => {
          return (
            <ul key={index}>
              <li>
                {definitions.definition}
                <div className="example">
                  <em>{definitions.example}</em>
                </div>
                <div>
                  <Synonyms synonyms={definitions.synonyms} />
                </div>
              </li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
}
