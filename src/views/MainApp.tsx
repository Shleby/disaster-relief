import * as React from "react";

import "./MainApp.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Home/HomePage";

class MainApp extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div>
          <h1 className="title">cers</h1>
          <p className="subtitle">Centralized Emergency Releif System</p>
          <HomePage />
        </div>
      </Router>
    );
  }
}

export default MainApp;
