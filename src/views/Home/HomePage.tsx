import * as React from "react";
import axios from "axios";

import "./HomePage.css";
import Category from "../../components/Category";
import { Link } from "react-router-dom";

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

  componentDidMount() {
    axios
      .get(
        "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cersstitch-xxofl/service/http/incoming_webhook/webhook0",
        {}
      )
      .then((res: any) => {
        console.log("Success", res);
        this.setState({ disasters: res.data });
      })
      .catch((res: Error) => {
        console.log("INVALID RESPONSE", res);
      });
  }

  render() {
    return (
      <div className="cover">
        <div className="container">
          <p className="containerTitle">Provide disaster relief for...</p>
          {this.state.disasters.map(function(i: any) {
            return (
              <div>
                <Link to="/labels">
                  <Category name={i.name} type={i.type} />
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
