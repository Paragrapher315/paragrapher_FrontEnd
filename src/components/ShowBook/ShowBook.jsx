import {
  Grid,
  Card,
  Avatar,
  Hidden,
  Typography,
  ThemeProvider,
  Button,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import axios from "axios";
// import { Button } from "@mui/material";
// import { HideImage } from "@mui/icons-material";

import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import picture from "../../assets/bookCover.png";
import { getUser, makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Carousel from "react-material-ui-carousel";
import {
  GetCommunityInfo,
  GetMyCommunities,
  GetRelatedBooks,
  GetRelatedParagraphs,
  LoadBookData,
  ReserveBook,
} from "../../Utils/Connection";
import Book1 from "../Shop/Book1";
import { useMediaQuery } from "@material-ui/core";
import { withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "@material-ui/lab/Skeleton";
import Paragraph from "../Paragraph/Paragraph";

export class ShowBook extends React.Component {
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
    relatedBooks: [],
    items: [],
    width: this.props.width,
    paragraphs: [],
    hasmore: false,
    start_off: 0,
    end_off: 10,
    communities: [],
  };

  async componentDidMount() {
    var splitted = decodeURIComponent(window.location.toString()).split("/");
    if (splitted[splitted.length - 1] === "") {
      splitted.pop();
    }
    await this.setState({ bookID: splitted.pop() });
    splitted.pop();
    await this.setState({ bookCommunity: splitted.pop() });
    await this.loadData(this.state.bookID);
    await GetRelatedBooks(this.state.bookID).then((res) => {
      this.setState({ relatedBooks: res.data.res });
    });
    this.setState({
      relatedBooks: this.state.relatedBooks.filter((obj) => {
        if (obj.id !== this.state.bookID) {
          return true;
        } else {
          return false;
        }
      }),
    });

    let size = 12;
    if (this.state.width == "xl") {
      size = 3;
    }
    if (this.state.width == "lg") {
      size = 3;
    }
    if (this.state.width == "md") {
      size = 4;
    }
    if (this.state.width == "sm") {
      size = 12;
    }
    console.log(size);
    console.log(this.state.width);
    let sliderItems =
      this.state.relatedBooks.length > 12 / size
        ? 12 / size
        : this.state.relatedBooks.length;
    let items = [];

    for (let i = 0; i < this.state.relatedBooks.length; i += sliderItems) {
      if (i % sliderItems === 0) {
        items.push(
          <Grid container spacing={0}>
            {this.state.relatedBooks
              .slice(i, i + sliderItems)
              .map((item, index) => {
                return (
                  <Grid
                    item
                    lg={size}
                    md={size}
                    sm={size}
                    style={{ margin: "auto" }}
                  >
                    <Book1
                      key={index}
                      id={item.id}
                      name={item.name}
                      genre={item.genre}
                      author={item.author}
                      price={item.price}
                      modified_time={item.modified_time}
                      reserved_time={item.reserved_time}
                      description={item.description}
                      seller_id={item.seller_id}
                      community_id={item.community_id}
                      community_name={item.community_name}
                      image={item.image}
                    />
                  </Grid>
                );
              })}
          </Grid>
        );
      }
    }
    this.setState({ items: items });
    GetMyCommunities().then((res) => {
      Array.isArray(res.data) &&
        res.data.forEach((element) => {
          this.state.communities.push(element.name);
        });
      this.setState({ communities: this.state.communities });
    });
    GetRelatedParagraphs(
      this.state.bookID,
      this.state.start_off,
      this.state.end_off
    ).then((res) => {
      this.setState({
        paragraphs: res.data.res,
      });
    });
    if (this.state.paragraphs.length === 9) {
      this.setState({ hasmore: true });
    }
  }
  fetchData = () => {
    const d = new Date();
    let arr = this.state.paragraphs;
    this.setState({ end_off: this.state.end_off + 10 });
    this.setState({ start_off: this.state.start_off + 10 });
    GetRelatedParagraphs(
      this.state.bookID,
      this.state.start_off,
      this.state.end_off
    ).then((res) => {
      res.data.res.forEach((value) => {
        this.state.paragraphs.push(value);
      });
      this.setState({ paragraphs: this.state.paragraphs });
    });
    if (arr.length == this.state.paragraphs.length) {
      this.setState({ hasmore: false });
    } else {
      this.setState({ hasmore: true });
    }
  };

  loadData = async (bookID) => {
    await LoadBookData(bookID).then((b) => {
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
                          onClick={() => {
                            ReserveBook(this.state.bookID);
                          }}
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
                            onClick={() => {
                              ReserveBook(this.state.bookID);
                            }}
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
            <Grid item lg={12} md={12} xs={12}>
              {this.state.relatedBooks.length >= 1 && (
                // <Typography
                //   style={{
                //     margin: "auto",
                //     textAlign: "center",
                //     fontSize: 20,
                //   }}
                // >
                //   متاسفانه محصولی موجود نیست !
                // </Typography>
                <Typography style={{ fontSize: 30 }}>محصولات مشابه</Typography>
              )}

              <Carousel
                autoPlay
                animation="fade"
                PrevIcon={<NavigateNextIcon />}
                NextIcon={<NavigateBeforeIcon />}
              >
                {this.state.items}
              </Carousel>
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              {this.state.paragraphs.length >= 1 && (
                <Typography style={{ fontSize: 30, paddingBottom: "2vh" }}>
                  پاراگراف های مرتبط
                </Typography>
              )}

              <InfiniteScroll
                dataLength={this.state.paragraphs.length}
                next={this.fetchData}
                hasMore={this.state.hasmore}
                loader={
                  <div style={{ textAlign: "center" }}>
                    <Card className={this.props.classes.card}>
                      <CardHeader
                        avatar={
                          <Skeleton
                            animation="wave"
                            variant="circle"
                            width={40}
                            height={40}
                          />
                        }
                        action={null}
                        title={
                          <Skeleton
                            animation="wave"
                            height="1vh"
                            width="40%"
                            style={{ marginBottom: 6 }}
                          />
                        }
                        subheader={
                          <div>
                            <Skeleton
                              animation="wave"
                              height="1vh"
                              width="25%"
                            />
                          </div>
                        }
                      />

                      {/* <Skeleton
                  animation="wave"
                  variant="rect"
                  className={this.props.classes.media}
                /> */}

                      <CardContent>
                        <React.Fragment>
                          <Skeleton
                            animation="wave"
                            height="1vh"
                            style={{ marginBottom: "0.5vh" }}
                          />
                          <Skeleton
                            animation="wave"
                            height="1vh"
                            width="100%"
                            style={{ marginBottom: "0.5vh" }}
                          />
                          <Skeleton
                            animation="wave"
                            height="1vh"
                            width="80%"
                            style={{ marginBottom: "0.5vh" }}
                          />
                        </React.Fragment>
                      </CardContent>
                    </Card>
                    {/* <CircularProgress color="secondary" size="2rem" /> */}
                  </div>
                }
              >
                {this.state.paragraphs.map((element) => {
                  console.log(element);
                  // var isliked = false;
                  // if (this.state.communities.includes(element.communityName))
                  //   isLiked(element.communityName, element.id).then((res) => {
                  //     isliked = res.message;
                  //     console.log(isliked);
                  //   });
                  return (
                    <Paragraph
                      user={element.user_name}
                      text={element.p_text}
                      date={element.date}
                      communityName={element.community_name}
                      avatar={element.avatar}
                      author={element.author}
                      tags={element.tags.split(",")}
                      canAction={true}
                      isMine={element.username == getUser()}
                      book={element.ref_book}
                      sendData={this.props.sendData}
                      sendDataComment={this.props.sendDataComment}
                      p_id={element.id}
                      userID={element.user_id}
                      likeCount={element.ima_count}
                      commentCount={element.reply_count}
                      // eslint-disable-next-line react/jsx-no-duplicate-props
                      canAction={this.state.communities.includes(
                        element.communityName
                      )}
                    />
                  );
                })}
              </InfiniteScroll>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

ShowBook.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(ShowBook);
