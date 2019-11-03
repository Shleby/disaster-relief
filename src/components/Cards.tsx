import * as React from "react";

import "./Category.css";
import { Card, Link } from "@material-ui/core";
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
      <div>
        <Card>
          <h1 style={{ textAlign: "center", color: "darkred" }}>
            {this.props.eventType}
          </h1>
          <a href={this.state.website} style={{ fontSize: 12 }}>
            {this.state.website}
            {this.state.name}
          </a>
          <details className="details">
            <summary style={{ textAlign: "center" }}>
              {this.props.summary}
            </summary>
          </details>
        </Card>
      </div>
    );
  }
}

export default Cards;
