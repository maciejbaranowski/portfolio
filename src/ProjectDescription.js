import React from "react";
import DataProvider from "./DataProvider";
import "../styles/Projects.css";

const getTags = tags => {
  return tags.map((tag, index) => (
    <span key={index}>
      {" "}<span className="project-tag">#{DataProvider.getTags()[tag]}</span>
    </span>
  ));
};

const getLink = link => {
  if (link === undefined) return "";
  return <a href={link}>{link}</a>;
};
export const ProjectDescription = props => {
  console.log(props);
  return (
    <div className="project-item">
      <span className="project-name">{props.project.name}</span>
      <p>{props.project.description}</p>
      <p>🔗 {getLink(props.project.link)}</p>
      <p>{getTags(props.project.tags)}</p>
    </div>
  );
};
