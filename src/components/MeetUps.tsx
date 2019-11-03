import * as React from "react";
import "./MeetUps.css";
import axios from "axios";
import Cards from "../components/Cards";

class VolunteerPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      organizations: [],
      name: "",
      type: "",
      date: "",
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
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 550px)",
            gridGap: 20,
            marginRight: 700,
            marginLeft: "-300px"
        }}
        >
        {this.state.organizations.map(function(i: any) {
            return (
            <div className="cards" style={{ marginLeft: "500px" }}>
                <Cards
                name={i.name}
                summary={i.summary}
                website={i.website}
                eventType={i.event}
                date={i.date}
                person={i.person}
                contact={i.contact}
                location={i.location}
                time={i.time}
                spots={i.spots}
                />
            </div>
            );
        })}
        </div>
    );
  }
}

export default VolunteerPage;
