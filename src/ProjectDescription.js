import React from "react";
import Well from "react-bootstrap/lib/Well";
import Badge from "react-bootstrap/lib/Badge";
import DataProvider from "./DataProvider";

const getTags = tags => {
  return tags.map((tag, index) => (
    <span key={index}>
      &nbsp;<Badge>{DataProvider.getTags()[tag]}</Badge>
    </span>
  ));
};

const getLink = link => {
  if (link === undefined) return "";
  return <a href={link}>{link}</a>;
};
export const ProjectDescription = props => {
  return (
    <Well>
      <h4>{props.project.name}</h4>
      <p>{props.project.description}</p>
      <p>🔗 {getLink(props.project.link)}</p>
      <p>{getTags(props.project.tags)}</p>
    </Well>
  );
};
