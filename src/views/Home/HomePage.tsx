import * as React from "react";

import "./HomePage.css";
import disasters from "../../disasters.json";
import Category from "../../components/Category";
import { Link } from 'react-router-dom';

class MainApp extends React.Component<any, any> {
  render() {
    return (
      <div className="cover">
        <div className="container">
          <p className="containerTitle">Provide disaster relief for...</p>
          {disasters.map(function(i: any) {
            return(
              <div>
                <Link to='/labels'>
                  <Category name={i.name} type={i.type}/>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MainApp;
