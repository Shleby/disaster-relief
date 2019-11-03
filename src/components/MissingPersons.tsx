import * as React from "react";
import "./MissingPersons.css";
import axios from "axios";
import Person from "../components/Person";

class VolunteerPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            MissingPersons: [],
            name: "",
            birth: "",
            last: "",
            description: "",
            gender: ""
        };
    }
    componentDidMount() {
    axios
        .get(
        "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cersstitch-xxofl/service/getMissingPersons/incoming_webhook/getMissingpersons",
        {}
        )
        .then((res: any) => {
        console.log("Success", res);
        this.setState({ MissingPersons: res.data });
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
        {this.state.MissingPersons.map(function(i: any) {
            return (
            <div className="persons" style={{ marginLeft: "500px" }}>
                <Person
                name={i.name}
                birth={i.birth}
                description={i.description}
                gender={i.gender}
                last={i.last}
                />
            </div>
            );
        })}
        </div>
    );
  }
}

export default VolunteerPage;
