import * as React from "react";

import "./Cards.css";
import { Button, Dialog, Grid, DialogTitle } from "@material-ui/core";
class Cards extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      organizations: this.props.name,
      links: this.props.website
    };
  }

  render() {
    return (
      <div id="card" className="card-boss">
        <h1 className="cardTitle">{this.props.eventType}</h1>
        <a href={this.state.website}>
          {this.state.website}
          {this.state.name}
        </a>
        <p className="details">
          <summary className="summary">{this.props.summary}</summary>
        </p>
        <p className="cardInfo">
          <strong>Date:</strong> {this.props.date}
        </p>
        <p className="cardInfo">
          <strong>Time:</strong> {this.props.time}
        </p>
        <p className="cardInfo">
          <strong>Location:</strong> {this.props.location}
        </p>
        <p className="cardInfo">
          <strong>Person of Contact:</strong> {this.props.person}
        </p>
        <p className="cardInfo">
          <strong>Contact Info:</strong> {this.props.contact}
        </p>
        <p className="cardInfo">
          <strong>Spots Left:</strong> {this.props.spots}
        </p>

        <div className="signUp">
          <Button href="/signin">Sign Up</Button>
        </div>
      </div>
    );
  }
}

export default Cards;
