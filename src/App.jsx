import React from "react";
import "../styles/App.css";

import {Navigation} from "./Navigation";
import {Content, NONE} from "./Content";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: NONE
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
        className={"content content-" + (this.state.activePage !== NONE
        ? "active"
        : "hidden")}>
        <Content activePage={this.state.activePage}/>
      </div>
    </div>
  );
}
