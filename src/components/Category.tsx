import * as React from "react";

import "./Category.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Category extends React.Component<any, any> {
  render() {
    return (
      <div id="category" className="cover">
        <div className="image">
          <img
            src={require("../img/" + this.props.type + ".png")}
            alt={this.props.type}
          />
        </div>
        <div className="content">
          <h2>{this.props.childName}</h2>
          <p>
            Provide relief for the {this.props.childName}. <u>See more</u>
            <ExpandMoreIcon className="arrowDown" />
          </p>
        </div>
        <ArrowForwardIosIcon className="arrowRight" />
      </div>
    );
  }
}

export default Category;
