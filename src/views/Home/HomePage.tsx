import * as React from "react";

import "./HomePage.css";
import disasters from "../../disasters.json";
import Category from "../../components/Category";

class MainApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      disaster: [],
      name: "",
      type: "",
      date: "",
      location: ""
    };
  }

  render() {
    return (
      <div className="cover">
        <div className="container">
          <p className="containerTitle">Provide disaster relief for...</p>
          {disasters.map(function(i: any) {
            return (
              <div>
                <Category name={i.name} type={i.type} />
              </div>
            );
          })}
          {this.state.disaster.map((disaster: { name: React.ReactNode }) => (
            <div>{disaster.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainApp;
