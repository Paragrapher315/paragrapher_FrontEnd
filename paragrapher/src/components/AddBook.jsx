import React, { Component } from "react";
import {
  TextField,
  Typography,
  Switch,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  Avatar,
} from "@material-ui/core";
class AddBook extends React.Component {
  render() {
    return (
      <Card>
        <form>
          <Grid container>
            <Grid item xs={12} lg={6} md={6}>
              <div
                style={{
                  borderRadius: "15%",
                  backgroundColor: "gray",
                  width: "50%",
                  paddingTop: "50%",
                  margin: "1vh auto",
                }}
              ></div>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <TextField />
              <br />
              <TextField />
              <br />
              <TextField />
            </Grid>
          </Grid>
        </form>
      </Card>
    );
  }
}

export default AddBook;
