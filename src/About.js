import React from "react";
import Alert from "react-bootstrap/lib/Alert";
import constructionSign from "../assets/construction.png";

export const About = () => (
  <div>
    <h2>BergSoft Maciej Baranowski</h2>
    <Alert bsStyle="warning" style={{ textAlign: "center" }}>
      <div>
        <img src={constructionSign} style={{ height: "64px", margin: "15px" }} />
      </div>
      <strong>Strona w budowie / Site under construction</strong>
    </Alert>
  </div>
);
