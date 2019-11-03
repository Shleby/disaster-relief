import * as React from "react";

import "./PickLabel.css";
import { url } from "inspector";

class MainApp extends React.Component<any, any> {
  render() {
    return (
      <div id="category" className="cover">
        <div className="image">
          <img src={require("../img/" + this.props.type + ".png")} alt={this.props.type}/>
        </div>
        <div className="content">
          <h2>{this.props.name}</h2>
          <p>Provide relief for the {this.props.name}. <u>See more</u></p>
        </div>
      </div>
    );
  }
}

export default MainApp;
