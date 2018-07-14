import React from "react";
import {About} from "./About";
import Projects from "./Projects";
import {Contact} from "./Contact";

export const NONE = 0;
export const ABOUT = 1;
export const PROJECTS = 2;
export const CV = 3;
export const CONTACT = 4;
export const PRIVATE = 5;

export const Content = props => {
  switch (props.activePage) {
    case ABOUT:
      return <About/>;
    case PROJECTS:
      return <Projects/>;
    case CV:
      return <Contact/>;
    case CONTACT:
      return <Contact/>;
    case PRIVATE:
      return <Contact/>;
    default:
      return <div>Page not found</div>;
  }
};
