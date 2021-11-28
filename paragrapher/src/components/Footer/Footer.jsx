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
import { Grid } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles(theme);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        style={{
          position: "initial",
          bottom: "0",
          zIndex: "10000",
          height: "5vh",
        }}
      >
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Grid container>
                <Grid item lg={3} xs={3} md={3}>
                  <Typography
                    variant="body1"
                    color="inherit"
                    className={classes.typography}
                  >
                    © پاراگرافر 1400
                  </Typography>
                </Grid>
                <Grid item lg={1} xs={1} md={1}></Grid>
                <Grid
                  item
                  lg={4}
                  xs={3}
                  md={3}
                  style={{ alignItems: "center" }}
                >
                  <Typography
                    className={classes.typography}
                    style={{
                      alignItems: "center",
                      textAlign: "right",
                      direction: "rtl",
                    }}
                  >
                    ما را در شبکه های اجتماعی دنبال کنید !
                  </Typography>
                </Grid>
                <Grid item lg={4} xs={5} md={5}>
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <Instagram />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </ThemeProvider>
  );
}
