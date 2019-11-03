import * as React from "react";

import "./Category.css";
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
        <h1 style={{ textAlign: "center", color: "darkred" }}>
          {this.props.eventType}
        </h1>
        <a href={this.state.website}>
          {this.state.website}
          {this.state.name}
        </a>
        <details className="details">
          <summary className="summary" style={{ textAlign: "center" }}>
            {this.props.summary}
          </summary>
        </details>
      </div>
    );
  }
}

export default Cards;
