import "../styles/Cv.css";

import DataProvider from "./DataProvider";
import { DevIconWithLabel } from "./DevIconWrapper";

export const Cv = () => {
  return (
    <div>
      <h2>{DataProvider.getTranslations().cv}</h2>
      {DataProvider.getCv().map((section) => (
        <CvSection key={section.text} section={section} />
      ))}
    </div>
  );
};

const CvSection = ({section}) => {
  return (
    <>
      <h4>{section.text}</h4>
      <ul className="cv-container">
        {section.descriptions.map((desc, i) => <CvItem key={desc.title} item={desc}/>)}
      </ul>
    </>
  );
}

const CvItem = ({ item }) => (
  <li>
    <div className="date">{item.timespan}</div>
    <div className="title">{item.title}</div>
    <div className="descr">{item.description}</div>
    {item.icons && <div className="icons">{item.icons.map(icon => (
      <DevIconWithLabel icon={icon} label="" size={2} key={icon} />
    ))}</div>}
  </li>
)
