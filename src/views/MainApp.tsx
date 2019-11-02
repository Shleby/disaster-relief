import * as React from "react";

import "./MainApp.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Home/HomePage";

class MainApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      samFletcher: "theboi"
    };
  }

  render() {
    return (
      <Router>
        <div>
          <HomePage />
        </div>
      </Router>
    );
  }
}

export default MainApp;
