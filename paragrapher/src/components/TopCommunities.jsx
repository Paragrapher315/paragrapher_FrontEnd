import React, { Component } from "react";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useStyles, theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { GetBestCommunities, GetCommunities } from "../Utils/Connection";
function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);

  return color;
}
function returnTopCommunities() {
  GetBestCommunities(3).then((res) => {
    console.log(res);
    return res;
  });
}
class TopCommunities extends React.Component {
  state = {
    bestCommunities: [],
  };
  componentDidMount() {
    GetBestCommunities().then((res) => {
      this.setState({ bestCommunities: res });
    });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Card
          style={{
            padding: "0 1vw",
            margin: "0 0 2vh 0",
          }}
        >
          <CardHeader
            action={
              <Button
                disabled
                style={{ fontFamily: "BYekan", backgroundColor: "#219EBC" }}
              >
                تمام کامیونیتی ها
              </Button>
            }
            title={
              <Typography style={{ fontFamily: "BYekan", textAlign: "right" }}>
                کامیونیتی های برتر
              </Typography>
            }
            style={{ paddingBottom: "0" }}
          />
          <CardContent style={{ padding: "0" }}>
            <List>
              {this.state.bestCommunities.map((bc) => {
                return (
                  <div
                    onClick={() =>
                      window.location.replace("/community/" + bc.name)
                    }
                  >
                    <ListItem alignItems="flex-start" button>
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            backgroundColor: randomColor(),
                            width: "2.5rem",
                            height: "2.5rem",
                          }}
                          aria-label="recipe"
                        >
                          <Typography style={{ fontFamily: "BYekan" }}>
                            ک
                          </Typography>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            style={{
                              fontFamily: "BYekan",
                              textAlign: "right",
                              fontSize: "2vh",
                            }}
                          >
                            {bc.name}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            style={{
                              fontFamily: "BYekan",
                              textAlign: "right",
                              fontSize: "2vh",
                            }}
                          >
                            {bc.member_count} عضو
                          </Typography>
                        }
                      />
                    </ListItem>
                    <Divider
                      component="li"
                      style={{ marginRight: "5vw", marginLeft: "1vw" }}
                    />
                  </div>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </ThemeProvider>
    );
  }
}

export default TopCommunities;
