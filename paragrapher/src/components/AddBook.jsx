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
  Button,
  Avatar,
} from "@material-ui/core";
class AddBook extends React.Component {
  render() {
    return (
      <Card style={{ width: "75vw", padding: "1vh 1vw" }}>
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
            <Grid
              item
              xs={12}
              lg={6}
              md={6}
              style={{ padding: "0 1vw", margin: "auto" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    label="نام کتاب"
                    style={{
                      direction: "rtl",
                      textAlign: "right",
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    label="نام نویسنده"
                    style={{
                      direction: "rtl",
                      textAlign: "right",
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    label="ژانر"
                    style={{
                      direction: "rtl",
                      textAlign: "right",
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    label="قیمت"
                    style={{
                      direction: "rtl",
                      textAlign: "right",
                      width: "100%",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                label="توضیحات"
                style={{
                  direction: "rtl",
                  textAlign: "right",
                  width: "100%",
                }}
                multiline
                minRows={5}
              />
            </Grid>
            <Grid item xs={12}>
              <Button />
            </Grid>
          </Grid>
        </form>
      </Card>
    );
  }
}

export default AddBook;
