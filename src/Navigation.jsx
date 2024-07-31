import React from "react";
import {Level1} from "./Level1"
import {Level2} from "./Level2"

export class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      menuState: "initial"
    }
  }
  level1Click = () => {
    this.setState({menuState: "expanded"});
  }
  level2Click = (location) => {
    this.setState({menuState: "final"});
    this
      .props
      .onNavigate(location);
  }
  render() {
    return (
      <div className={"menu menu-" + this.state.menuState}>
        <Level1 onClick={this.level1Click}/>
        <Level2 onClick={this.level2Click}/>
      </div>
    )
  }
}