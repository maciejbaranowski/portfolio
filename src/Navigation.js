import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import logo from "../assets/logo.png";
import { ABOUT, PROJECTS, CONTACT } from "./Content";
import DataProvider from "./DataProvider";

export const Navigation = props => (
  <div>
    <img src={logo} className="logo" />
    <Nav bsStyle="pills" stacked activeKey={props.currentPage} onSelect={props.onNavigate}>
      <NavItem eventKey={ABOUT}>{DataProvider.getTranslations().about}</NavItem>
      <NavItem eventKey={PROJECTS}>{DataProvider.getTranslations().projects}</NavItem>
      <NavItem eventKey={CONTACT}>{DataProvider.getTranslations().contact}</NavItem>
    </Nav>
  </div>
);
