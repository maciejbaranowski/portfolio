import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import logo from "../assets/logo.png";
import { ABOUT, PROJECTS, CONTACT } from "./Content";

export const Navigation = props => (
  <div>
    <img src={logo} className="logo" />
    <Nav bsStyle="pills" stacked activeKey={props.currentPage} onSelect={props.onNavigate}>
      <NavItem eventKey={ABOUT}>O firmie</NavItem>
      <NavItem eventKey={PROJECTS}>Projekty</NavItem>
      <NavItem eventKey={CONTACT}>Kontakt</NavItem>
    </Nav>
  </div>
);
