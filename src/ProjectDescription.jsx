import "../styles/Projects.css";

const getLink = (link) => {
  if (link === undefined) return "";
  return (
    <a href={link} target="_blank">
      Link
    </a>
  );
};
export const ProjectDescription = ({project}) => {
  return (
    <div className="mini-panel">
      <span className="project-name">{project.name}</span>
      <p>{project.description}</p>
      <p>🔗 {getLink(project.link)}</p>
      <p>{project.tags.map((tag, index) => (
        <span key={index}>
          {" "}
          <span className="project-tag">#{tag}</span>
        </span>
      ))}</p>
    </div>
  );
};
