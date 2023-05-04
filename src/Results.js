import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <div>{props.results.phonetic}</div>
        <ul>
          {props.results.meanings.map((meaning, index) => {
            return (
              <li key={index}>
                <Meaning meaning={meaning} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}