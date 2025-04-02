import DataProvider from "./DataProvider";
import { DevIconWithLabel } from "./DevIconWrapper";
import ProfileImage from "../assets/profile.jpg";

import "../styles/About.css";

export const About = () => {
  const { title, description, name } = DataProvider.getTranslations().homepage;
  return <>
    <img src={ProfileImage} className="profile-image" alt="Profile image" />
    <h2>{name}</h2>
    <h3>{title}</h3>
    <p>{description}</p>

    <div className="mini-panel">
      <h3>Front-end</h3>
      <div className="flex flex-gapped">
        <DevIconWithLabel icon="react"/>
        <DevIconWithLabel icon="typescript"/>
        <DevIconWithLabel icon="javascript"/>
      </div>
    </div>
    <div className="mini-panel">
      <h3>Back-end</h3>
      <div className="flex flex-gapped">
        <DevIconWithLabel icon="nodejs"/>
        <DevIconWithLabel icon="python"/>
        <DevIconWithLabel icon="cplusplus"/>
      </div>
    </div>
    <div className="mini-panel">
      <h3>Cloud and Devops</h3>
      <div className="flex flex-gapped">
        <DevIconWithLabel icon="amazonwebservices"/>
        <DevIconWithLabel icon="terraform"/>
        <DevIconWithLabel icon="jenkins"/>
      </div>
    </div>
    <div className="mini-panel">
      <h3>Database</h3>
      <div className="flex flex-gapped">
        <DevIconWithLabel icon="sqldeveloper"/>
        <DevIconWithLabel icon="dynamodb"/>
        <DevIconWithLabel icon="mongodb"/>
      </div>
    </div>

  </>;
};
