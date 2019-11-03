import * as React from "react";

import "./Category.css";
import disasters from "../disasters.json";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { url } from "inspector";

class MainApp extends React.Component<any, any> {
  render() {
    return (
      <div id="category" className="cover">
        <div className="image">
          <img src={require("../img/" + this.props.img)} alt={this.props.img}/>
        </div>
        <div className="content">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
        <ArrowForwardIosIcon className="icon"/>
      </div>
    );
  }
}

export default MainApp;
