import "../styles/Cv.css";

import DataProvider from "./DataProvider";

export const Cv = () => {
  let sections = DataProvider.getCv().map((section, i) => {
    let elements = section.descriptions.map((desc, i) => {
      return (
        <li key={i}>
          <div className="date">
            {desc[2]}
            {desc[2] === "" ? "" : <br />}
          </div>
          <div className="title">{desc[1]}</div>
          <div className="descr">{desc[0]}</div>
        </li>
      );
    });
    return (
      <>
        <h4>{section.text}</h4>
        <ul key={i} className="cv-section">
          {elements}
        </ul>
      </>
    );
  });
  return (
    <div>
      <h2>{DataProvider.getTranslations().cv}</h2>
      {sections}
    </div>
  );
};
