import * as React from "react";
import axios from "axios";
import "./MainApp.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import LabelPage from "./Label/LabelPage";
import OrganizationPage from "./Organization/OrganizationPage";
import VolunteerPage from "./Volunteer/VolunteerPage";
import { Link } from "react-router-dom";

class MainApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      disasters: [],
      name: "",
      type: "",
      date: "",
      location: "",
      childName: ""
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
  callbackFunction = (childData: any) => {
    this.setState({ childName: childData });
  };
  render() {
    return (
      <div className="background">
        <Link to="/">
          <h1 className="title">cers</h1>
          <p className="subtitle">Centralized Emergency Relief System</p>
        </Link>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/labels">
            <LabelPage disastersDB={this.state.disasters} />
          </Route>
          <Route path="/volunteer" component={VolunteerPage} />
          <Route path="/organization" component={OrganizationPage} />
        </Switch>
      </div>
    );
  }
}

export default MainApp;
