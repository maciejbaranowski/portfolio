import React from "react";
import Col from "react-bootstrap/lib/Col";
import Panel from "react-bootstrap/lib/Panel";
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
        className={"scrollableFullHeightContent content content-" + (this.state.activePage !== NONE
        ? "active"
        : "hidden")}>
        <Content activePage={this.state.activePage}/>
      </div>
    </div>
  );
}
