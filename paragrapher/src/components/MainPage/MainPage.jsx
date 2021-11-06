import React, { Component } from "react";
import { Grid, Paper, Hidden } from "@material-ui/core";
import { BrowserView, MobileView } from "react-device-detect";
function MainPage() {
  return (
    <Grid container spacing={2} justify="center">
      <Hidden xsDown>
        <Grid item lg={4} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper style={{ height: 375, width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: 375, width: "100%" }} />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid item lg={8} xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{ height: 275, width: "100%" }} />
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: 675, width: "100%" }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainPage;
