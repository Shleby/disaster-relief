import * as React from "react";

import "./LabelPage.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

class MainApp extends React.Component<any, any> {
  render() {
    return (
      <div id="label" className="cover">
        <div className="container">
          <h3>I want to help out as a(n)...</h3>
          <div className="items">
            <Link to='/volunteer'>
                <div className="vItem item">
                    <FavoriteBorderIcon className="icon" />
                    <h1>Volunteer</h1>
                    <p>Help with on-site relief, distribute goods to victims in need, and more.</p>
                </div>
            </Link>
            <Link to='/organization'>
                <div className="oItem item">
                    <PeopleOutlineIcon className="icon" />
                    <h1>Organization</h1>
                    <p>Organize meetups with volunteers, set up fundraisers, and provide needed resources.</p>
                </div>
            </Link>
            {/* <div className="item">
                <p><u>Or support as a guest</u></p> <ArrowForwardIosIcon className="icon" />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MainApp;
