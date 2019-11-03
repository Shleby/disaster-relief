import * as React from "react";
import "./VolunteerPage.css";
import axios from "axios";
import MeetUps from "../../components/MeetUps";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class VolunteerPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      organizations: [],
      name: "",
      type: "",
      date: "",
      person: "",
      spots: "",
      contact: "",
      location: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cersstitch-xxofl/service/getOrganizations/incoming_webhook/getOrganizations",
        {}
      )
      .then((res: any) => {
        console.log("Success", res);
        this.setState({ organizations: res.data });
      })
      .catch((res: Error) => {
        console.log("INVALID RESPONSE", res);
      });
  }
  render() {
    return (
      <div className="vCover">
        <ul className="navbar">
            <Link to="/volunteer/meetups"><li>Meetups</li></Link>
            <li>Missing Persons</li>
            <li>Donate</li>
        </ul>
        <div className="container">
          <h1 className="volHead"><strong>California Wildfires</strong></h1>
          <p className="volSubtitle">Volunteer with an organization or relief center.</p>
          <Switch>
            <Route exact path="/volunteer/meetups" component={MeetUps} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default VolunteerPage;
