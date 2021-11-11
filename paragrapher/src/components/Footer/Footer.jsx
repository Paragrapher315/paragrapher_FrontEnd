import React, { Component } from "react";
import {
  AppBar,
  Container,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles, theme } from "../theme";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Instagram } from "@material-ui/icons";

export default function Footer() {
  const classes = useStyles(theme);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.typography}
            >
              © پاراگرافر 1400
            </Typography>
            <Typography
              style={{ marginRight: "40vh" }}
              className={classes.typography}
            >
              ما را در شبکه های اجتماعی دنبال کنید !
            </Typography>
            <IconButton>
              <TwitterIcon />
              <FacebookIcon />
              <Instagram />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
