import * as React from "react";

class MainApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      samFletcher: "theboi"
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome, to main app</h1>
      </div>
    );
  }
}

export default MainApp;
