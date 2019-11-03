import * as React from "react";
import "./SignIn.css";
import {
  Grid,
  CssBaseline,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  SnackbarContent
} from "@material-ui/core";
import logo from "../img/male.png";

class signin extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      first: "",
      last: "",
      phone: "",
      email: ""
    };
  }
  //   pushToMongo() {
  //     axios({
  //       method: "post",
  //       url:
  //         "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cersstitch-xxofl/service/post/incoming_webhook/webhook0",
  //       data: [
  //         this.state.first,
  //         this.state.last,
  //         this.state.phone,
  //         this.state.email
  //       ]
  //     }).catch(err => {
  //       console.error(err);
  //     });
  //   }
  /* Updates our username. */
  updateUsername = (e: any) => {
    this.setState({ first: e.target.value });
  };

  /* Updates our password. */
  updatePassword = (e: any) => {
    this.setState({ last: e.target.value });
  };

  /* Updates our password. */
  updatePhone = (e: any) => {
    this.setState({ phone: e.target.value });
  };
  /* Updates our password. */
  updateEmail = (e: any) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <Grid container component="main" className="root">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="image-dont"></Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className="paper">
            <Button className="button" href="/volunteer/meetups">
              Back
            </Button>
            <img className="logo" src={logo} alt="logo" />
            <label className="label">Sign Up!</label>
            <form className="form">
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                onInput={this.updateUsername}
                autoFocus
                required
                id="username-input"
                label="First Name"
                type="text"
                autoComplete="current-username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onInput={this.updatePassword}
                id="password-input"
                label="Last Name"
                type="password"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                onInput={this.updateEmail}
                autoFocus
                required
                id="username-input"
                label="Email"
                type="text"
                autoComplete="current-username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                onInput={this.updatePhone}
                autoFocus
                required
                id="username-input"
                label="Phone Number"
                type="text"
                autoComplete="current-username"
              />
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Remember me"
              />
              <Button
                // onClick={this.pushToMongo}
                fullWidth
                variant="contained"
                className="submit"
              >
                Sign In
              </Button>
              {this.state.incorrectLogin ? (
                <SnackbarContent message="We dont recognize this username or password. Double-check your information and try again." />
              ) : null}
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default signin;
