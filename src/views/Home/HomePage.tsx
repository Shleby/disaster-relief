import * as React from "react";
import axios from "axios";

import "./HomePage.css";
import Category from "../../components/Category";
import { Link, Route } from "react-router-dom";
import VolunteerPage from "../Volunteer/VolunteerPage";
import { Button } from "@material-ui/core";

class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      disasters: [],
      name: "",
      type: "",
      date: "",
      location: "",
      selectedName: ""
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
                  <Category childName={i.name} type={i.type} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;
