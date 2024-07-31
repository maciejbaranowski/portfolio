import { About } from "./About";
import Projects from "./Projects";
import { Contact } from "./Contact";
import { Cv } from "./CV";
import { Private } from "./Private";

import "../styles/Content.css";

import { TransitionGroup } from "react-transition-group";

export const NONE = 0;
export const ABOUT = 1;
export const PROJECTS = 2;
export const CV = 3;
export const CONTACT = 4;
export const PRIVATE = 5;

const getContentPage = (props) => {
  switch (props.activePage) {
    case ABOUT:
      return <About key={1} />;
    case PROJECTS:
      return <Projects key={2} />;
    case CV:
      return <Cv key={3} />;
    case CONTACT:
      return <Contact key={4} />;
    case PRIVATE:
      return <Private key={5} />;
    default:
      return <div>Page not found</div>;
  }
};

export const Content = (props) => (
  <TransitionGroup
    transitionName="content-page"
    transitionEnterTimeout={3000}
    transitionLeaveTimeout={3000}
  >
    {getContentPage(props)}
  </TransitionGroup>
);
