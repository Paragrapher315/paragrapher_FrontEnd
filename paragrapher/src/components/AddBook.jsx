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
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
class AddBook extends React.Component {
  state = {
    showAddImageButton: false,
  };
  render() {
    return (
      <Card style={{ padding: "1vh 1vw", margin: "2vh 5vw" }}>
        <form>
          <Grid container>
            <Grid item xs={12} lg={4} md={4}>
              <div
                style={{
                  borderRadius: "15%",
                  backgroundColor: "gray",
                  width: "80%",
                  paddingTop: "80%",
                  margin: "auto",
                  position: "relative",
                }}
                onMouseEnter={() => this.setState({ showAddImageButton: true })}
                onMouseLeave={() =>
                  this.setState({ showAddImageButton: false })
                }
              >
                {this.state.showAddImageButton ? (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "45%",
                      right: "45%",
                      padding: "1vh 1vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {}}
                  >
                    <AddAPhotoIcon
                      style={{
                        opacity: "60%",
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              lg={8}
              md={8}
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
          <Grid container style={{ padding: "0 1vw", marginTop: "2vh" }}>
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
                minRows={7}
                maxRows={7}
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
