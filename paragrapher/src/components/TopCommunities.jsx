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
import { useStyles, theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);

  return color;
}
function TopCommunities() {
  const classesFuck = useStyles(theme);
  return (
    <ThemeProvider theme={theme}>
      <Card
        style={{
          padding: "2vh 1vh",
          margin: "0 0 2vh 0",
        }}
      >
        <CardHeader
          action={
            <Button
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
            <ListItem alignItems="flex-start" button>
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: randomColor(),
                    width: "3rem",
                    height: "3rem",
                  }}
                  aria-label="recipe"
                >
                  <Typography style={{ fontFamily: "BYekan" }}>ک</Typography>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    کامیونیتی اول
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    1000 عضو
                  </Typography>
                }
              />
            </ListItem>
            <Divider
              component="li"
              style={{ marginRight: "5vw", marginLeft: "1vw" }}
            />

            <ListItem alignItems="flex-start" button>
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: randomColor(),
                    width: "3rem",
                    height: "3rem",
                  }}
                  aria-label="recipe"
                >
                  <Typography style={{ fontFamily: "BYekan" }}>ک</Typography>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    کامیونیتی دوم
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    1000 عضو
                  </Typography>
                }
              />
            </ListItem>
            <Divider
              component="li"
              style={{ marginRight: "5vw", marginLeft: "1vw" }}
            />

            <ListItem alignItems="flex-start" button>
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: randomColor(),
                    width: "3rem",
                    height: "3rem",
                  }}
                  aria-label="recipe"
                >
                  <Typography style={{ fontFamily: "BYekan" }}>ک</Typography>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    کامیونیتی سوم
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    1000 عضو
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default TopCommunities;
