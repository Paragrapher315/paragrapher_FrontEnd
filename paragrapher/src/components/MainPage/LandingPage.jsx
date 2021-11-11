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
function LandingPage() {
  const classes = useStyles(theme);
  const paragraphs = [
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
  ];
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const text = "مکانی ";
  Aos.init({ duration: 600 });
  return (
    <>
      <BrowserView>
        <ThemeProvider theme={theme}>
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
              <Grid
                item
                xs={12}
                lg={6}
                md={6}
                style={{ height: "80vh", paddingTop: "35vh" }}
              >
                <Grid container>
                  <Grid item>
                    <div style={{ alignItems: "center" }}>
                      <div
                        style={{
                          direction: "rtl",
                          textAlign: "right",
                          float: "right",
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
                      <div
                        style={{
                          direction: "rtl",
                          height: "20vh",
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
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    alignItems="center"
                    justifyContent="center"
                    alignContent="center"
                    style={{ textAlign: "center" }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        paddingTop: "10vh",
                      }}
                    >
                      <Button
                        style={{
                          width: "30vw",
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
                        className={classes.sectionDesktop}
                      >
                        {/* <AccountCircle /> */}
                        همین حالا ثبت نام کنید
                      </Button>
                    </div>
                  </Grid>
                </Grid>
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
          <div
            className={classes.imageCont}
            style={{
              backgroundImage: `url(${bgImage2})`,
              height: "100vh",
              width: "100vw",
              marginTop: "0vh",
            }}
          >
            <Typography
              className={classes.headerText}
              style={{ textAlign: "center" }}
            >
              بهترین پاراگراف ها را با ما بخوانید
            </Typography>
            <Grid container style={{ marginTop: "5vh" }}>
              <Grid item lg={1} md={1}></Grid>
              <Grid item lg={5} md={5}>
                <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <Paragraph
                    author="اردا"
                    isPotd={false}
                    date="24 آبان 1502"
                    avatar="ا"
                    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                  />
                </div>
              </Grid>
              <Grid item lg={1} md={1}></Grid>
              <Grid item lg={3} md={3}>
                <img
                  src={wmImage}
                  style={{
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: "5vh" }}>
              <Grid item lg={7} md={7}></Grid>
              <Grid item lg={4} md={4}>
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <Paragraph
                    author="اردا"
                    isPotd={false}
                    date="24 آبان 1502"
                    avatar="ا"
                    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                  />
                </div>
              </Grid>
              <Grid item lg={1} md={1}></Grid>
            </Grid>
          </div>
          <div style={{ marginTop: "1vh" }}>
            <Typography
              className={classes.headerText}
              style={{ textAlign: "center" }}
            >
              قلم نویسندگان بزرگ را به دست بگیرید
            </Typography>
          </div>
        </ThemeProvider>
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
      <PopupAccountBox
        trigger={accountBoxTrigger}
        setTrigger={setAccountBoxTrigger}
      />
    </>
  );
}

export default LandingPage;
