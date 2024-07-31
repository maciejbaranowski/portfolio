import DataProvider from "./DataProvider";
import { DevIconWithLabel } from "./DevIconWrapper";

export const About = () => {
  const HomePage = DataProvider.getTranslations().homepage
  return <>
    <HomePage />
    <div className="mini-panel">
      <h3>Front-end</h3>
      <div className="flex flex-gapped">
        <DevIconWithLabel icon="react" label="React" />
        <DevIconWithLabel icon="typescript" label="Typescript" />
        <DevIconWithLabel icon="javascript" label="Javascript" />
      </div>
    </div>
    <div className="mini-panel">
      <h3>Back-end</h3>
      <div className="flex flex-gapped">
        <DevIconWithLabel icon="nodejs" label="NodeJS" />
        <DevIconWithLabel icon="python" label="Python" />
        <DevIconWithLabel icon="cplusplus" label="C++" />
      </div>
    </div>
    <div className="mini-panel">
      <h3>Cloud and Devops</h3>
      <div className="flex flex-gapped">
        <DevIconWithLabel icon="amazonwebservices" label="AWS" />
        <DevIconWithLabel icon="terraform" label="Terraform" />
        <DevIconWithLabel icon="jenkins" label="Jenkins" />
      </div>
    </div>
    <div className="mini-panel">
      <h3>Database</h3>
      <div className="flex flex-gapped">
        <DevIconWithLabel icon="sqldeveloper" label="SQL" />
        <DevIconWithLabel icon="dynamodb" label="DynamoDB" />
        <DevIconWithLabel icon="mongodb" label="MongoDB" />
      </div>
    </div>

  </>;
};
