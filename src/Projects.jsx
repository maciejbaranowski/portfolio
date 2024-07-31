import "../styles/Projects.css";

import { ProjectDescription } from "./ProjectDescription";
import DataProvider from "./DataProvider";

const Projects = () => {
  return (
    <div>
      <h2>{DataProvider.getTranslations().projects}</h2>
      <div className="projects-list">
        {DataProvider.getProjects().map((project, index) => (
          <ProjectDescription key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
