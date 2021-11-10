import { Grid } from "@material-ui/core";
import { flexbox, maxWidth } from "@mui/system";
import welcomeImage from "../../assets/Welcome.png";
import React from "react";
import {
  AppContainer,
  MainBackDrop,
  MainBackDrop2,
  MainBackDrop3,
} from "../common";

class LandingPage extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12} lg={6} md={6}></Grid>
        <Grid item xs={12} lg={6} md={6}>
          <div>
            <img
              src={welcomeImage}
              style={{
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default LandingPage;
