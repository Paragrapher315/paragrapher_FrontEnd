import React, { Component } from "react";
import { TextField, Typography, Switch } from "@material-ui/core";
class ProfileEditor extends React.Component {
  render() {
    return (
      <div style={{ padding: "10vh 10vw" }}>
        <form>
          <Typography>نوع پاراگراف: </Typography>
          <Typography style={{ display: "inline" }}>شخصی</Typography>
          <Switch />
          <Typography style={{ display: "inline" }}>کتابی</Typography>
          <br />
          <TextField
            label="نام کتاب"
            style={{ direction: "rtl", textAlign: "right" }}
            inputProps={{ textAlign: "right" }}
          />
        </form>
      </div>
    );
  }
}

export default ProfileEditor;
