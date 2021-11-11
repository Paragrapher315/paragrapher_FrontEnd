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
function RecentProducts() {
  return (
    <ThemeProvider theme={theme}>
      <Card style={{ padding: "2vh 1vh" }}>
        <CardHeader
          action={
            <Button
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
                    محصول اول
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    20000 تومان
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
                    محصول دوم
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    32000 تومان
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
                    محصول سوم
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{ fontFamily: "BYekan", textAlign: "right" }}
                  >
                    52000 تومان
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

export default RecentProducts;
