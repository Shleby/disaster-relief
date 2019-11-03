import * as React from "react";

import "./OrganizationPage.css";

class OrganizationPage extends React.Component<any, any> {
  render() {
    return (
      <div id="organization" className="cover">
        <ul className="navbar">
            <li>Event</li>
            <li>Fundraiser</li>
        </ul>
        <div className="container">
          <h3>Organization</h3>
        </div>
      </div>
    );
  }
}

export default OrganizationPage;
