import React from "react";
import DataProvider from "./DataProvider";

export const Cv = () => {
  let sections = DataProvider.getCv().map((section, i) => {
    let elements = section.descriptions.map(
      (desc,i) => {
        return <div className="cv-element" key={i}>
          <grey>{desc[0]}</grey> | {desc[1]}<br/>
          {desc[2]}{desc[2] === "" ? "" : <br/>}
        </div>
      });
    return <div key={i} className="cv-section">
      <h4>{section.text}</h4>
      {elements}
    </div>
  });
  return <div>{sections}</div>
}