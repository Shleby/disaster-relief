import * as React from "react";

import "./MainApp.css";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./Home/HomePage";
import LabelPage from "./Label/LabelPage";
import OrganizationPage from "./Organization/OrganizationPage";
import VolunteerPage from "./Volunteer/VolunteerPage";
import { Link } from 'react-router-dom';

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

  render() {
    return (
        <div className="background">
<<<<<<< HEAD
          <h1 className="title">cers</h1>
          <p className="subtitle">Centralized Emergency Releif System</p>
          <HomePage />
=======
          <Link to="/">
            <h1 className="title">cers</h1>
            <p className="subtitle">Centralized Emergency Releif System</p>
          </Link>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/labels' component={LabelPage}/>
            <Route path='/volunteer' component={VolunteerPage}/>
            <Route path='/organization' component={OrganizationPage}/>
          </Switch>
>>>>>>> origin/sam
        </div>
    );
  }
}

export default MainApp;
