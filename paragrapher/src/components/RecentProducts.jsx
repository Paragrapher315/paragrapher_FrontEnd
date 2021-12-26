import React, { Component } from "react";
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
import references from "../assets/References.json";
import { useStyles, theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { GetRecentBook } from "../Utils/Connection";
import { stringToColor } from "./TopCommunities";
function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);

  return color;
}
class RecentProducts extends React.Component {
  state = {
    recentProducts: [],
  };
  componentDidMount() {
    GetRecentBook().then((res) => {
      console.log("I'm here", res);
      this.setState({ recentProducts: res });
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
                onClick={() => {
                  window.location.replace("/books");
                }}
                style={{ fontFamily: "BYekan", backgroundColor: "#219EBC" }}
              >
                تمام محصولات
              </Button>
            }
            title={
              <Typography style={{ fontFamily: "BYekan", textAlign: "right" }}>
                آخرین محصولات
              </Typography>
            }
            style={{ paddingBottom: "0" }}
          />
          <CardContent style={{ padding: "0" }}>
            <List>
              {console.log(this.state.recentProducts)}
              {this.state.recentProducts.map((rp) => {
                return (
                  <div
                    onClick={() =>
                      window.location.replace(
                        "/community/" + rp.community_name + "/ShowBook/" + rp.id
                      )
                    }
                  >
                    <ListItem alignItems="flex-start" button>
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            backgroundColor: stringToColor(rp.name),
                            width: "2.5rem",
                            height: "2.5rem",
                          }}
                          src={references.url_address + rp.image}
                          aria-label="recipe"
                        >
                          <Typography style={{ fontFamily: "BYekan" }}>
                            {rp.name[0]}
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
                            {rp.name}
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
                            {rp.price}
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

export default RecentProducts;
