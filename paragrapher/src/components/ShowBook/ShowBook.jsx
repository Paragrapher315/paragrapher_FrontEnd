import {
  Grid,
  Card,
  Avatar,
  Hidden,
  Typography,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import axios from "axios";
// import { Button } from "@mui/material";
// import { HideImage } from "@mui/icons-material";

import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import picture from "../../assets/bookCover.jpg";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
import { GetCommunityInfo, LoadBookData } from "../../Utils/Connection";

class ShowBook extends React.Component {
  state = {
    bookImage: picture,
    bookName: "",
    bookAuthor: "",
    bookDesc: "",
    bookGenre: "",
    bookCommunity: "",
    bookID: "",
    hasImage: false,
    communityInfo: "",
    bookPrice: 0,
    canEdit: false,
  };

  async componentDidMount() {
    var splitted = window.location.toString().split("/");
    await this.setState({ bookID: splitted.pop() });
    splitted.pop();
    await this.setState({ bookCommunity: splitted.pop() });
    await this.loadData(this.state.bookID);
    console.log(this.state.bookCommunity);
  }

  loadData = async (bookID) => {
    await LoadBookData(bookID).then((b) => {
      console.log(b);
      this.setState({ bookName: b.book.name });
      this.setState({ bookAuthor: b.book.author });
      this.setState({ bookGenre: b.book.genre });
      this.setState({ bookDesc: b.book.description });
      this.setState({ bookPrice: b.book.price });
      this.setState({ canEdit: b.book.editable });
      if (b.book.image != null) {
        console.log(b.book.image);
        this.setState({
          bookImage: references.url_address + b.book.image,
        });
        this.setState({ hasImage: true });
      } else {
        this.setState({
          bookImage: picture,
        });
      }
    });
    var communityInfo = await GetCommunityInfo(this.state.bookCommunity);
    this.setState({ communityInfo: communityInfo.data.description });
  };

  buyBook = async () => {
    await axios
      .post(
        makeURL("/community/" + this.state.bookCommunity + "/store/book/buy"),
        {
          book_id: this.state.bookID,
        }
      )
      .then((res) => {
        console.log(res);
      });
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
                        {this.state.bookName}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 18,
                          paddingBottom: "5vh",
                        }}
                      >
                        {this.state.bookAuthor}
                      </Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={12} lg={4} md={4}>
                    <Card
                      style={{
                        width: "100%",
                        maxHeight: "80vh",
                        boxShadow: "0vh 0vw 5vh 1vh #396b74",
                      }}
                    >
                      {/* <div
                        style={{
                          backgroundImage: `url(${this.state.bookImage})`,
                          //   minHeight: "50vh",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "content",
                          //   width: "50%",
                          paddingTop: "100%",
                          //   backgroundColor: "red",
                        }}
                      ></div> */}
                      <Avatar
                        variant="square"
                        src={this.state.bookImage}
                        style={{ height: "70%", width: "100%" }}
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
                            {this.state.bookName}
                          </Typography>
                          <Typography style={{ fontSize: 18 }}>
                            {this.state.bookAuthor}
                          </Typography>
                          <Typography
                            style={{ fontSize: 15, paddingTop: "2vh" }}
                          >
                            سبک : {this.state.bookGenre}
                          </Typography>
                          <Typography
                            style={{ fontSize: 17, paddingTop: "2vh" }}
                          >
                            توضیحات :
                          </Typography>
                          <Typography
                            style={{ fontSize: 15, paddingTop: "2vh" }}
                          >
                            {this.state.bookDesc}
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
                        href={"/community/" + this.state.bookCommunity}
                        style={{ float: "left" }}
                      >
                        {this.state.bookCommunity}
                      </Link>
                      <Typography style={{ fontSize: 20, paddingTop: "5vh" }}>
                        درباره اجتماع :
                      </Typography>
                      <Typography
                        style={{ paddingTop: "1vh", paddingRight: "1vw" }}
                      >
                        {this.state.communityInfo}
                      </Typography>
                      <Typography style={{ paddingTop: "5vh", fontSize: 20 }}>
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
                        {this.state.bookPrice}
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
                          onClick={this.buyBook}
                          disabled
                        >
                          خرید کتاب
                        </Button>
                      </div>
                      {this.state.canEdit && (
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
                            onClick={() => {
                              window.location.replace(
                                "/community/" +
                                  this.state.bookCommunity +
                                  "/EditBook/" +
                                  this.state.bookID
                              );
                            }}
                          >
                            ویرایش کتاب
                          </Button>
                        </div>
                      )}
                    </Grid>
                  </Hidden>
                  <Hidden smUp>
                    <Grid item xs={12}>
                      <div
                        style={{
                          borderBottom: "2px solid lightgrey",
                          height: "100%",
                        }}
                      >
                        <Typography style={{ fontSize: 17, paddingTop: "5vh" }}>
                          سبک : {this.state.bookGenre}
                        </Typography>
                        <Typography style={{ fontSize: 17, paddingTop: "2vh" }}>
                          توضیحات :
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 15,
                            paddingTop: "2vh",
                            marginBottom: "1vh",
                          }}
                        >
                          {this.state.bookDesc}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div style={{ paddingTop: "1vh" }}>
                        <Typography
                          style={{ fontSize: 20, fontWeight: "bold" }}
                        >
                          از اجتماع :
                        </Typography>
                        <Link
                          className={this.props.classes.link}
                          color="secondary"
                          href={"/community/" + this.state.bookCommunity}
                          //   style={{ float: "left" }}
                        >
                          {this.state.bookCommunity}
                        </Link>

                        <Typography style={{ fontSize: 20, paddingTop: "5vh" }}>
                          درباره اجتماع :
                        </Typography>
                        <Typography
                          style={{ paddingTop: "1vh", paddingRight: "1vw" }}
                        >
                          {this.state.communityInfo}
                        </Typography>
                        <Typography style={{ paddingTop: "5vh", fontSize: 20 }}>
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
                          {this.state.bookPrice}
                          <span style={{ color: "black" }}>
                            {"     "}تومان{" "}
                          </span>
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
                            onClick={this.buyBook}
                            disabled
                          >
                            خرید کتاب
                          </Button>
                          {this.state.canEdit && (
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
                                onClick={() => {
                                  window.location.replace(
                                    "/community/" +
                                      this.state.bookCommunity +
                                      "/EditBook/" +
                                      this.state.bookID
                                  );
                                }}
                              >
                                ویرایش کتاب
                              </Button>
                            </div>
                          )}
                        </div>
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
