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
        <h1>Home PAge</h1>
      </div>
    );
  }
}

export default MainApp;
