import React from "react";
import {ABOUT, PROJECTS, CONTACT, CV, PRIVATE} from "./Content";
import DataProvider from "./DataProvider";

const Level2Button = props => 
  <div className="button" onClick={props.onClick}>
    {props.text}
  </div>;

export const Level2 = props => 
  <div className="level-2">
    <Level2Button
      onClick={() => {props.onClick(ABOUT)}}
      text={"🤵 " + DataProvider
      .getTranslations()
      .about}/>
    <Level2Button
      onClick={() => {props.onClick(PROJECTS)}}
      text={"🔨 " + DataProvider
        .getTranslations()
        .projects}/>
    <Level2Button
      onClick={() => {props.onClick(CV)}}
      text={"📝 " + DataProvider
        .getTranslations()
        .cv}/>
    <Level2Button
      onClick={() => {props.onClick(CONTACT)}}
      text={"💬 " + DataProvider
        .getTranslations()
        .contact}/>
    <Level2Button
      onClick={() => {props.onClick(PRIVATE)}}
      text={"🚫 " + DataProvider
        .getTranslations()
        .private}/>
  </div>;
