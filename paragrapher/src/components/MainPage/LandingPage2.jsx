import { CssBaseline, Grid } from "@material-ui/core";
import welcomeImage from "../../assets/Welcome.png";
import bgImage from "../../assets/wp3503092.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import Button from "@material-ui/core/Button";
import Paragraph from "../Paragraph/Paragraph";
import { BrowserView, MobileView } from "react-device-detect";
import { Typography } from "@mui/material";
import { useStyles, theme } from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import PopupAccountBox from "../AccountBox/PopupAccountBox";
import TypeWriter from "./TypeWriter";
import bgImage2 from "../../assets/wp2.jpg";
import wmImage from "../../assets/woman.png";

function LandingPage2() {
  const classes = useStyles(theme);
  const paragraphs = [
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
    "برای به اشتراک گذاشتن مطالعه شما و در کنار دوستانان با امکانات عالی",
    "امن برای کتابخوانی",
  ];
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const text = "مکانی ";
  Aos.init({ duration: 600 });
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${bgImage})`,
          marginTop: "0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div id="welcome">
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div>
                <Grid container>
                  <Grid item xs={8} md={12} lg={12}>
                    <div>
                      <Grid container>
                        <Grid item xs={12}>
                          <div
                            style={{
                              direction: "rtl",
                              textAlign: "right",
                              width: "100%",
                            }}
                          >
                            <link />
                            <Typography
                              className={classes.headerText}
                              style={{ marginBottom: "5%" }}
                            >
                              پاراگرافر
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div
                            style={{
                              direction: "rtl",
                              height: "20vh",
                              padding: "0",
                            }}
                          >
                            <Typography
                              className={classes.bodyText}
                              style={{
                                textAlign: "right",
                                direction: "rtl",
                                float: "right",
                              }}
                            >
                              {text}
                              <TypeWriter data={paragraphs} />
                              <p></p>
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={12} lg={12}>
                    <div
                      style={{
                        alignItems: "center",
                        paddingTop: "10vh",
                      }}
                    >
                      <Button
                        style={{
                          height: "10vh",
                          fontFamily: "BYekan",
                          fontSize: "20pt",
                          borderRadius: "50px",
                          boxShadow: "3px 10px 20px ",
                          position: "inherit",
                        }}
                        onClick={() => setAccountBoxTrigger(true)}
                        variant="contained"
                        color="secondary"
                      >
                        {/* <AccountCircle /> */}
                        همین حالا ثبت نام کنید
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img
                src={welcomeImage}
                style={{ width: "100%", backgroundSize: "contain" }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default LandingPage2;
