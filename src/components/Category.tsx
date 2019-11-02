import * as React from "react";

import "./Category.css";
import disasters from "../disasters.json";

class MainApp extends React.Component<any, any> {
  render() {
    return (
      <div id="category" className="cover">
        <div className="image">
        </div>
        <div className="content">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default MainApp;
