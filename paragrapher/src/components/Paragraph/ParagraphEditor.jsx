import React, { Component } from "react";
import {
  TextField,
  Typography,
  Switch,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
class ProfileEditor extends React.Component {
  render() {
    return (
      <div style={{ padding: "10vh 10vw", width: "70%" }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item lg={6} md={6} xs={12}>
                  <Typography>نوع پاراگراف: </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <Grid container>
                    <Grid item lg={3} md={3} xs={3}>
                      <Typography>کتابی</Typography>
                    </Grid>
                    <Grid item lg={3} md={3} xs={3}>
                      <Switch />
                    </Grid>
                    <Grid item lg={3} md={3} xs={3}>
                      <Typography>شخصی</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} xs={12}>
                  <TextField
                    label="نام کتاب"
                    style={{
                      direction: "rtl",
                      textAlign: "right",
                      width: "100%",
                    }}
                    inputProps={{ textAlign: "right" }}
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <TextField label="نام نویسنده" style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="متن پاراگراف"
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default ProfileEditor;
