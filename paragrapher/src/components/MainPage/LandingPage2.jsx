import { CssBaseline, Grid } from "@material-ui/core";
import welcomeImage from "../../assets/Welcome.png";
import bgImage from "../../assets/wp3503092.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import Button from "@material-ui/core/Button";
import Paragraph from "../Paragraph/Paragraph";
import { BrowserView, MobileView } from "react-device-detect";
import { Typography, Hidden } from "@material-ui/core";
import { useStyles, theme } from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import TypeWriter from "./TypeWriter";
import wmImage from "../../assets/LandingPic1.png";
import peopleImage from "../../assets/LandingPic2.png";
import PopupAccountBox from "../AccountBox/PopupAccountBox";
import { useEffect } from "react";
import axios from "axios";
import { GetParagraphs } from "../../Utils/Connection";
import h from "../../assets/h.png"
import k from "../../assets/k.png"
import s from "../../assets/s.png"
import sh from "../../assets/sh.jpg"
import c from "../../assets/c.jpg"
import hm from "../../assets/hm.png"
import a from "../../assets/a.png"

function LandingPage2() {
  const classes = useStyles(theme);
  const paragraphs = [
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
    "برای به اشتراک گذاشتن مطالعه شما",
    "امن برای کتابخوانی",
  ];
  let paragraphss;

  useEffect(() => {
    GetParagraphs(new Date(), 0, 2).then((e) => {
      paragraphss = e.data.res;
      if (paragraphs.length == 0) {
      }
    });
  });
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const text = "مکانی ";
  Aos.init({ duration: 600 });
  return (
    <ThemeProvider theme={theme}>
      {/* welcome part  */}
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${bgImage})`,
          marginTop: "0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        id="welcome"
      >
        <PopupAccountBox
          trigger={accountBoxTrigger}
          setTrigger={setAccountBoxTrigger}
          tt="Register"
        />
        <div style={{ padding: "5vh 5vw" }}>
          <Grid container>
            <Hidden smUp>
              <Grid item xs={12} md={6} lg={6} style={{ padding: "5vh 5vw" }}>
                <img
                  src={welcomeImage}
                  style={{ width: "100%", backgroundSize: "contain" }}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
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
                              height: "25vh",
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
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                          <div
                            style={{
                              alignItems: "center",
                              paddingTop: "0vh",
                              textAlign: "center",
                            }}
                          >
                            <Button
                              style={{
                                borderRadius: "50px",
                                boxShadow: "3px 10px 20px ",
                                position: "inherit",
                                padding: "3vh 3vw",
                              }}
                              onClick={() => setAccountBoxTrigger(true)}
                              variant="contained"
                              color="secondary"
                            >
                              {/* <AccountCircle /> */}
                              <Typography
                                style={{
                                  fontFamily: "BYekan",
                                  fontSize: "calc(1vw + 2vh)",
                                }}
                              >
                                همین حالا ثبت نام کنید
                              </Typography>
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6} lg={6} style={{ margin: "5vh 0 0 0" }}>
                <img
                  src={welcomeImage}
                  style={{ width: "100%", backgroundSize: "contain" }}
                />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>

      {/* best paragraphs part */}
      <div
        id="bestParagraphs"
        style={{
          minHeight: "100vh",
          background: "rgb(32,54,77)",
          background:
            "linear-gradient(180deg, rgba(32,54,77,1) 14%, rgba(35,63,87,1) 28%, rgba(38,72,97,1) 37%, rgba(42,83,110,1) 49%, rgba(45,93,123,1) 59%, rgba(57,131,168,1) 87%, rgba(70,148,186,1) 100%)",
        }}
      >
        <div>
          <div style={{ padding: "2vh 0.5vw" }}>
            <Typography
              style={{
                textAlign: "center",
                color: "#fafafa",
                fontFamily: "BYekan",
                fontSize: "calc(2vh + 2vw)",
              }}
            >
              بهترین پاراگراف ها را با ما بخوانید
            </Typography>
          </div>
          <div style={{ padding: "0.5vh 0.5vw 15vh 0.5vw" }}>
            <div>
              <Grid container>
                <Grid
                  item
                  lg={8}
                  md={8}
                  xs={12}
                  style={{
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    style={{ margin: "auto 2vw" }}
                  >
                    <Paragraph
                      user="اردا"
                      isPotd={false}
                      date="24 آبان 1502"
                      avatar="ا"
                      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                    />
                  </div>
                </Grid>
                <Hidden xsDown>
                  <Grid item lg={4} md={4}>
                    <div>
                      <img
                        src={wmImage}
                        style={{
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                        }}
                      />
                    </div>
                  </Grid>
                </Hidden>
              </Grid>
            </div>
            <div>
              <Grid container>
                <Hidden xsDown>
                  <Grid item lg={4} md={4}>
                    <div>
                      <img
                        src={peopleImage}
                        style={{
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                        }}
                      />
                    </div>
                  </Grid>
                </Hidden>
                <Grid
                  item
                  lg={8}
                  md={8}
                  xs={12}
                  style={{
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    style={{ margin: "0 2vw" }}
                  >
                    <Paragraph
                      user="اردا"
                      isPotd={false}
                      date="24 آبان 1502"
                      avatar="ا"
                      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <br></br>
        <div className="row">
          <div className="col12 d-flex justify-content-center h3">ساخته شده توسط:</div>
          <div>
            <br></br>
            <br></br>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2 ">
            <div className="row">
              <div className="col-12 ">
                <img src={hm} class="rounded-circle" style={{height:"150px", width:"150px"}}/>
                </div>
              <div className="col-12 d-flex justify-content-center">
                  صدرا حیدری مقدم
              </div>
            <p></p>  
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2 ">
            <div className="row">
              <div className="col-12 ">
                <img src={a} class="rounded-circle" style={{height:"150px", width:"150px"}}/>
                </div>
              <div className="col-12 d-flex justify-content-center">
                  یاسین عسکریان
              </div>
            <p></p>  
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">

          <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2 ">
            <div className="row">
              <div className="col-12 ">
                <img src={c} class="rounded-circle" style={{height:"150px", width:"150px"}}/>
                </div>
              <div className="col-12 d-flex justify-content-center">
                  امیررضا کربنی
              </div>
            <p></p>  
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2">
            <div className="row">
              <div className="col-12 ">
                <img src={k} class="rounded-circle" style={{height:"150px", width:"150px"}}/>
                </div>
              <div className="col-12 d-flex justify-content-center">
              نیما کمبرانی
              </div>
            <p></p>  
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2 ">
            <div className="row">
              <div className="col-12 ">
                <img src={h} class="rounded-circle" style={{height:"150px", width:"150px"}}/>
                </div>
              <div className="col-12 d-flex justify-content-center">
                  هدیه اسحقی
              </div>
            <p></p>  
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2">
            <div className="row">
              <div className="col-12 ">
                <img src={sh} class="rounded-circle" style={{height:"150px", width:"150px"}}/>
                </div>
              <div className="col-12 d-flex justify-content-center">
                  کیاکسار شیروانی مقدم
              </div>
            <p></p>  
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2 ">
            <div className="row">
              <div className="col-12 ">
                <img src={s} class="rounded-circle" style={{height:"150px", width:"150px"}}/>
                </div>
              <div className="col-12 d-flex justify-content-center">
                  اردا صمدی
              </div>
            <p></p>  
            </div>
          </div>


        </div>
        <div><br></br></div>
        <div><br></br></div>
      </div>
    </ThemeProvider>
  );
}

export default LandingPage2;
