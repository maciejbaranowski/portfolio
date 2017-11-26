import React from "react";
import Button from "react-bootstrap/lib/Button";
import Col from "react-bootstrap/lib/Col";
import { ProjectDescription } from "./ProjectDescription";
import DataProvider from "./DataProvider";

import Alert from "react-bootstrap/lib/Alert";
import constructionSign from "../assets/construction.png";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      active: Array(DataProvider.getTags().length).fill(true)
    };
  }

  getTags = active => {
    let tags = [];
    for (let [index, tag] of DataProvider.getTags().entries()) {
      let style = this.state.active[index] ? "primary" : "default";
      tags.push(
        <span key={index}>
          <Button
            bsSize="xsmall"
            bsStyle={style}
            onClick={() => {
              let newActive = this.state.active;
              this.state.active[index] = !this.state.active[index];
              this.setState({ active: newActive });
            }}
          >
            {tag}
          </Button>&nbsp;
        </span>
      );
    }
    return tags;
  };

  isTagSelectedForProject = tags => {
    for (let tag of tags) {
      if (this.state.active[tag]) {
        return true;
      }
    }
    return false;
  };

  getProjects = () => {
    let projects = [];
    for (let [index, project] of DataProvider.getProjects().entries()) {
      if (this.isTagSelectedForProject(project.tags)) {
        projects.push(<ProjectDescription project={project} key={index} />);
      }
    }
    return projects;
  };

  render = () => (
    <div>
      <h2>Projekty</h2>
      <Alert bsStyle="warning" style={{ textAlign: "center" }}>
        <div>
          <img src={constructionSign} style={{ height: "64px", margin: "15px" }} />
        </div>
        <strong>Strona w budowie / Site under construction</strong>
      </Alert>
      <Col>Filtrowanie: {this.getTags()}</Col>
      <Col>{this.getProjects()}</Col>
    </div>
  );
}
