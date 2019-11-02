import * as React from "react";

import "./HomePage.css";

class MainApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      samFletcher: "theboi"
    };
  }

  render() {
    return (
      <div className="home">
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default MainApp;
