import * as React from "react";
import axios from "axios";

import "./HomePage.css";
import disasters from "../../disasters.json";
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
        "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cersstitch-xxofl/service/getService/incoming_webhook/webhook0",
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then((res: any) => {
        console.log("Success", res);
        this.setState({ disasters: res.data });
        console.log(this.state.disasters);
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
        </div>
      </div>
    );
  }
}

export default MainApp;
