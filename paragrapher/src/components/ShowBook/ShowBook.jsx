import {
  Grid,
  Card,
  Avatar,
  Hidden,
  Typography,
  ThemeProvider,
  Button,
} from "@material-ui/core";
// import { Button } from "@mui/material";
// import { HideImage } from "@mui/icons-material";

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import picture from "../../assets/book.jpg";

class ShowBook extends React.Component {
  state = {
    avatarURL: picture,
  };
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div style={{ padding: "5vh 5vw 5vh 5vw" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12} md={12}>
              <Card style={{ padding: "5vh 5vw 5vh 5vw" }}>
                <Grid container>
                  <Hidden smUp>
                    <Grid item xs={12}>
                      <Typography
                        style={{
                          fontSize: 30,
                        }}
                      >
                        The Crying Book
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 18,
                          paddingBottom: "5vh",
                        }}
                      >
                        Heather Christie
                      </Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={12} lg={4} md={4}>
                    <Card
                      style={{
                        width: "100%",
                        maxHeight: "50vh",
                        boxShadow: "0vh 0vw 5vh 1vh #396b74",
                      }}
                    >
                      <Avatar
                        variant="square"
                        src={this.state.avatarURL}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </Card>
                  </Grid>
                  <Hidden xsDown>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      style={{
                        paddingRight: "5vw",
                        paddingLeft: "1vw",
                      }}
                    >
                      <div
                        style={{
                          borderLeft: "2px solid lightgrey",
                          height: "100%",
                        }}
                      >
                        <div style={{ paddingLeft: "1vw" }}>
                          <Typography style={{ fontSize: 30 }}>
                            The Crying Book
                          </Typography>
                          <Typography style={{ fontSize: 18 }}>
                            Heather Christie
                          </Typography>
                          <Typography
                            style={{ fontSize: 15, paddingTop: "2vh" }}
                          >
                            سبک : درام , تخیلی
                          </Typography>
                          <Typography
                            style={{ fontSize: 15, paddingTop: "1vh" }}
                          >
                            تعداد صفحات : 123
                          </Typography>
                          <Typography
                            style={{ fontSize: 17, paddingTop: "2vh" }}
                          >
                            توضیحات :
                          </Typography>
                          <Typography
                            style={{ fontSize: 15, paddingTop: "2vh" }}
                          >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                            آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
                            نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد. در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
                            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <Typography style={{ fontSize: 20 }}>
                        از اجتماع :
                      </Typography>
                      <Link
                        className={this.props.classes.link}
                        color="secondary"
                        href={"/community/" + this.props.communityName}
                        style={{ float: "left" }}
                      >
                        {this.props.communityName}
                      </Link>
                      <Typography></Typography>
                      <Typography style={{ paddingTop: "20vh", fontSize: 20 }}>
                        قیمت فروشنده :
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          textAlign: "left",
                          color: "#DDA15E",
                        }}
                      >
                        130000
                        <span style={{ color: "black" }}>{"     "}تومان </span>
                      </Typography>
                      <div
                        style={{
                          textAlign: "center",
                          paddingTop: "5vh",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ fontSize: 20, width: "100%" }}
                        >
                          خرید کتاب
                        </Button>
                      </div>
                    </Grid>
                  </Hidden>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default ShowBook;
