import * as React from "react";

import "./Person.css";

class Person extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      organizations: this.props.name,
      links: this.props.website
    };
  }


  render() {
    return (
      <div id="person">
        <img src={require("../img/" + this.props.gender.toLowerCase() + ".png")} alt="gender"/>
        <div className="pContent">
            <p><strong>Name:</strong> {this.props.name}</p>
            <p><strong>Age:</strong> {this.props.birth}</p>
            <p><strong>Last Seen:</strong> {this.props.last}</p>
            <p><strong>Description:</strong> {this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Person;
