import { CssBaseline, Grid } from "@material-ui/core";
import { flexbox, maxWidth } from "@mui/system";
import welcomeImage from "../../assets/Welcome.png";
import bgImage from "../../assets/wp3503092.jpg";
import React from "react";
import {
  AppContainer,
  MainBackDrop,
  MainBackDrop2,
  MainBackDrop3,
} from "../common";
import { BrowserView, MobileView } from "react-device-detect";
import Typewriter from "typewriter-effect";
import TypeWriterEffect from "react-typewriter-effect";
import { Typography } from "@mui/material";
import { useStyles, theme } from "../theme";
function LandingPage() {
  const classes = useStyles(theme);
  const paragraphs = [
    "جایی برای به اشتراک گذاشتن مطالعه شما",
    "مکانی امن برای کتابخوانی",
  ];

  return (
    <>
      <BrowserView>
        <div
          className={classes.imageCont}
          style={{
            backgroundImage: `url(${bgImage})`,
            height: "100vh",
            width: "100vw",
            marginTop: "-5vh",
          }}
        >
          <Grid
            container
            spacing={0}
            alignItems={"center"}
            style={{ padding: "0 10%" }}
          >
            <Grid item xs={12} lg={6} md={6}>
              <div>
                <div
                  style={{
                    direction: "rtl",
                    textAlign: "right",
                    float: "right",
                    width: "100%",
                  }}
                >
                  <Typography
                    className={classes.headerText}
                    style={{ marginBottom: "5%" }}
                  >
                    پاراگرافر
                  </Typography>
                </div>
                <div style={{ direction: "rtl", float: "right" }}>
                  <TypeWriterEffect
                    textStyle={{ fontFamily: "BYekan", fontSize: "15pt" }}
                    startDelay={2000}
                    multiText={paragraphs}
                    multiTextDelay={1000}
                    typeSpeed={30}
                  />
                </div>
              </div>
            </Grid>
            <Grid
              justifyContent={"center"}
              item
              xs={12}
              lg={6}
              md={6}
              style={{ marginTop: "20%" }}
            >
              <div style={{ direction: "ltr" }}>
                <img
                  src={welcomeImage}
                  style={{
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </BrowserView>

      <MobileView>
        <Grid container>
          <Grid item xs={12} lg={6} md={6}>
            <div>
              <img
                src={welcomeImage}
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6}></Grid>
        </Grid>
      </MobileView>
    </>
  );
}

export default LandingPage;
