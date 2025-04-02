const iconToLabelMapping = {
  "react": "React",
  "typescript": "Typescript",
  "javascript": "Javascript",
  "nodejs": "NodeJS",
  "python": "Python",
  "cplusplus": "C++",
  "amazonwebservices": "AWS",
  "terraform": "Terraform",
  "jenkins": "Jenkins",
  "sqldeveloper": "SQL",
  "dynamodb": "DynamoDB",
  "mongodb": "MongoDB"
}

const DevIconWrapper = ({ icon, size = 3 }) => (
  <i className={`devicon-${icon}-plain colored`} style={{ fontSize: `${size}em` }}></i>
);

const DevIconWithLabel = ({ icon, size = 3 }) => (
  <div className="flex flex-column">
    <div><DevIconWrapper icon={icon} size={size} /></div>
    <div style={{ fontSize: "0.65em" }}>{iconToLabelMapping[icon]}</div>
  </div>
);

export { DevIconWrapper, DevIconWithLabel };