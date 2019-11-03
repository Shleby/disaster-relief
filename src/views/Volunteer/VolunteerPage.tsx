import * as React from "react";
import "./VolunteerPage.css";
import axios from "axios";
import Cards from "../../components/Cards";
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
      <div>
        <div className="container">
          <h1 className="volHead">California Fires</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 650px)",
              gridGap: 50,
              marginRight: 700,
              marginLeft: "-375px"
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
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default VolunteerPage;
