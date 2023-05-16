import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <ul>
        {props.meaning.definitions.map((definitions, index) => {
          return (
            <div key={index}>
              <div>
                <div className="definition">{definitions.definition}</div>
                <div className="example">{definitions.example}</div>
                <Synonyms synonyms={definitions.synonyms} />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
