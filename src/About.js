import React from "react";
import Alert from "react-bootstrap/lib/Alert";
import DataProvider from "./DataProvider";

export const About = () => (
  <div>
    <h2>{DataProvider.getTranslations().companyName}</h2>
    {DataProvider.getTranslations().description}
  </div>
);
