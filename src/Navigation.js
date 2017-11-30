import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";
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
    <hr />
    <ButtonGroup>
      <Button
        bsStyle={DataProvider.isPl() ? "primary" : "default"}
        bsSize="small"
        onClick={() => {
          props.languageChange("pl");
        }}
      >
        Polski
      </Button>
      <Button
        bsStyle={DataProvider.isEn() ? "primary" : "default"}
        bsSize="small"
        onClick={() => {
          props.languageChange("en");
        }}
      >
        English
      </Button>
    </ButtonGroup>
  </div>
);
