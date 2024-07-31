import React from "react";
import DataProvider from "./DataProvider";

export const Level1 = props => 
  <div className="button">
    <div className="btn-lang">
      <div
        className="btn-lang-top"
        onClick={() => {
        DataProvider.isEn = false;
        props.onClick();
      }}>Polski</div>
      <div
        className="btn-lang-bottom"
        onClick={() => {
        DataProvider.isEn = true;
        props.onClick();
      }}>English</div>
    </div>
    <div className="btn-logo">Bergsoft
      <br/>Maciej Baranowski</div>
  </div>