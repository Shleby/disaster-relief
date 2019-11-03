import * as React from "react";
import "./VolunteerPage.css";

class VolunteerPage extends React.Component<any, any> {
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

  // componentDidMount() {
  //   this.setState({ disasters: this.props.disastersDB });
  //   this.setState({ name: this.state.disasters.find() });
  // }
  render() {
    return (
      <div id="volunteer">
        <div className="container">
          <h1 className="volHead">California Fires</h1>
        </div>
      </div>
    );
  }
}

export default VolunteerPage;
