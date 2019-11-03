import * as React from "react";

import "./MainApp.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Home/HomePage";
import LabelPage from "./Label/LabelPage";

class MainApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      disasters: [],
      name: "",
      type: "",
      date: "",
      location: ""
    };
  }

  render() {
    return (
      <Router>
        <div className="background">
          <h1 className="title">cers</h1>
          <p className="subtitle">Centralized Emergency Releif System</p>
          <HomePage />
        </div>
      </Router>
    );
  }
}

export default MainApp;
