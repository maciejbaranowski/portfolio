import React from "react";
import "../styles/App.css";

import {Navigation} from "./Navigation";
import {Content, NONE, PROJECTS, CV} from "./Content";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: CV
    };
  }

  render = () => (
    <div>
      <Navigation
						onNavigate={newActivePage => {
							this.setState({ activePage: newActivePage });
						}}
						currentPage={this.state.activePage}
					/>
      <div
        className={"scrollableFullHeightContent content content-" + (this.state.activePage !== NONE
        ? "active"
        : "hidden")}>
        <Content activePage={this.state.activePage}/>
      </div>
    </div>
  );
}
