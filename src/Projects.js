import React from "react";
import Button from "react-bootstrap/lib/Button";
import Col from "react-bootstrap/lib/Col";
import { ProjectDescription } from "./ProjectDescription";

export const tagsList = [
  "Javascript",
  "Webdevelopment",
  "ReactJS",
  "HTML5",
  "CSS3",
  "Image Processing",
  "C++",
  "Machine Learning"
];

const projectsList = [
  {
    name: "Jakiś fajny projekt",
    description: "Opis projektu...",
    link: "http://google.com",
    tags: [0]
  },
  {
    name: "Inny projekt",
    description: "Opis projektu...",
    link: "http://google.com",
    tags: [0, 1]
  },
  {
    name: "A ten jest w JS",
    description: "Opis projektu...",
    tags: [2]
  }
];

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      active: Array(tagsList.length).fill(true)
    };
  }

  getTags = active => {
    let tags = [];
    for (let [index, tag] of tagsList.entries()) {
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
    for (let [index, project] of projectsList.entries()) {
      if (this.isTagSelectedForProject(project.tags)) {
        projects.push(<ProjectDescription project={project} key={index} />);
      }
    }
    return projects;
  };

  render = () => (
    <div>
      <h2>Projekty</h2>
      <Col>Filtrowanie: {this.getTags()}</Col>
      <Col>{this.getProjects()}</Col>
    </div>
  );
}
