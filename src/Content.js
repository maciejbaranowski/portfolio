import React from "react";
import { About } from "./About";
import Projects from "./Projects";
import { Contact } from "./Contact";

export const ABOUT = 1;
export const PROJECTS = 2;
export const CONTACT = 3;

export const Content = props => {
  switch (props.activePage) {
    case ABOUT:
      return <About />;
    case PROJECTS:
      return <Projects />;
    case CONTACT:
      return <Contact />;
    default:
      return <div>Page not found</div>;
  }
};
