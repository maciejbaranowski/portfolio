import React from "react";
import "../styles/Cv.css";

import DataProvider from "./DataProvider";

export const Cv = () => {
  let sections = DataProvider.getCv().map((section, i) => {
    let elements = section.descriptions.map(
      (desc,i) => {
        return <div className="cv-element" key={i}>
          <span className="cv-element-title">{desc[0]}</span> | {desc[1]}<br/>
          {desc[2]}{desc[2] === "" ? "" : <br/>}
        </div>
      });
    return <div key={i} className="cv-section">
      <h4>{section.text}</h4>
      {elements}
    </div>
  });
  return <div>
    <h2>{DataProvider.getTranslations().cv}</h2>
    {sections}
  </div>
}