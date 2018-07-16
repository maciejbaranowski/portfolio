import React from "react";
import "../styles/Projects.css";

import { ProjectDescription } from "./ProjectDescription";
import DataProvider from "./DataProvider";

export default class Projects extends React.Component {
  constructor() {
    super();
  }

  render = () => {
    return <div>
      <h2>{DataProvider.getTranslations().projects}</h2>
      <div className="projects-list">{
        DataProvider.getProjects().map((project, index) => 
           <ProjectDescription key={index} project={project}/>
        )
      }</div>
    </div>
  };
}
