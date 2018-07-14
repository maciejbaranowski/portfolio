import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";
import logo from "../assets/logo.png";
import {ABOUT, PROJECTS, CONTACT} from "./Content";
import DataProvider from "./DataProvider";

export class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      menuState: "initial"
    }
  }
  render() {
    return (
      <div className={"menu menu-" + this.state.menuState}>
      <div className="button">
        <div className="menuBtn">
          <div
            className="btn-lang-left"
            onClick={() => {
            DataProvider.isEn = false;
            this.setState({menuState: "expanded"})
          }}>Polski</div>
          <div
            className="btn-lang-right"
            onClick={() => {
              DataProvider.isEn = true;
            this.setState({menuState: "expanded"})
          }}>English</div>
        </div>
        <div className="closeBtn">Bergsoft
          <br/>Maciej Baranowski</div>
      </div>
      <div className="level-2">
        <div
          className="button"
          onClick={() => {
          this.setState({menuState: "final"})
          this.props.onNavigate(ABOUT);
        }}>
          🤵 {DataProvider
            .getTranslations()
            .about}
        </div>
        <div
          className="button"
          onClick={() => {
          this.setState({menuState: "final"})
          this.props.onNavigate(PROJECTS);
        }}>
          🔨 {DataProvider
            .getTranslations()
            .projects}
        </div>
        <div
          className="button"
          onClick={() => {
          this.setState({menuState: "final"})
          this.props.onNavigate(CONTACT);
        }}>
          📝 {DataProvider
            .getTranslations()
            .cv}
        </div>
        <div
          className="button"
          onClick={() => {
          this.setState({menuState: "final"})
          this.props.onNavigate(CONTACT);
        }}>
          💬 {DataProvider
            .getTranslations()
            .contact}
        </div>
        <div
          className="button"
          onClick={() => {
          this.setState({menuState: "final"})
          this.props.onNavigate(ABOUT);
        }}>
          🚫 {DataProvider
            .getTranslations()
            .private}
        </div>
      </div>
    </div>
    )
  }
}