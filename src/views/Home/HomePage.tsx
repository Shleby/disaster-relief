import * as React from "react";

import "./HomePage.css";
import disasters from "../../disasters.json";
import Category from "../../components/Category";

class MainApp extends React.Component<any, any> {
  render() {
    return (
      <div className="cover">
        <div className="container">
        {disasters.map(function(i: any) {
          return(
            <div>
              <Category name={i.name}/>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default MainApp;
