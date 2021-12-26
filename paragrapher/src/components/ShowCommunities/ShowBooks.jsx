import {
  Card,
  CircularProgress,
  Typography,
  Slider,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetCommunities, GetRecentBook } from "../../Utils/Connection";
import Community from "../CreateCommunity/Community";
import MyCommunityList, { ChangeToPersian } from "../Profile/MyCommunityList";
import { ThemeProvider } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Book from "../Shop/Book";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Book1 from "../Shop/Book1";

class ShowBooks extends React.Component {
  state = {
    start_off: 0,
    end_off: 8,
    books: [],
    hasmore: false,
    value: [0, 200000],
    minValue: 0,
    maxValue: 200000,
    shownBooks: [],
    search: "",
  };

  componentDidMount = async () => {
    await GetRecentBook(this.state.start_off, this.state.end_off).then(
      (res) => {
        // let arr = [];
        // for (let i = 0; i < res.length; i++) {
        //   let item = {
        //     community: {
        //       name: res[i].name,
        //       description: res[i].description,
        //       member_count: res[i].member_count,
        //       avatar: res[i].avatar,
        //       jalali_date: res[i].jalali_date,
        //     },
        //   };
        //   arr.push(item);
        // }
        this.setState({ books: res });
        let book = this.state.books.reduce((prev, curr) =>
          prev.Cost < curr.Cost ? prev : curr
        );
        this.setState({ minValue: 0 });
        book = this.state.books.reduce((prev, curr) =>
          prev.Cost > curr.Cost ? prev : curr
        );
        this.setState({ maxValue: book.price });
        this.setState({ value: [this.state.minValue, this.state.maxValue] });
        this.filter();
      }
    );

    if (this.state.books.length == 8) {
      this.setState({ hasmore: true });
    }
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
    this.filter();
  };
  iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
  IOSSlider = withStyles({
    root: {
      color: "#219EBC",
      height: 2,
      padding: "15px 0",
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: "#8ECAE6",
      boxShadow: this.iOSBoxShadow,
      marginTop: -14,
      marginLeft: -14,
      "&:focus, &:hover, &$active": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: this.iOSBoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 12px)",
      top: -22,
      "& *": {
        background: "transparent",
        color: "#000",
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: "#bfbfbf",
    },
    mark: {
      backgroundColor: "#bfbfbf",
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  })(Slider);

  handleChange = (event, value) => {
    this.setState({ value: value });
    this.filter();
  };

  filter = async () => {
    let arr = [];
    await this.setState({ shownBooks: [] });
    await this.state.books.forEach((value) => {
      if (
        value.price >= this.state.value[0] &&
        value.price <= this.state.value[1]
      ) {
        this.state.shownBooks.push(value);
      }
    });

    arr = await this.state.shownBooks.filter((value) => {
      if (value.name.toLowerCase().includes(this.state.search)) return true;
      else if (value.genre.toLowerCase().includes(this.state.search))
        return true;
      else if (value.author.toLowerCase().includes(this.state.search))
        return true;
      else if (value.description.toLowerCase().includes(this.state.search))
        return true;
    });

    this.setState({ shownBooks: arr });
  };

  fetchData = async () => {
    let arr = this.state.books.length;
    this.setState({ end_off: this.state.end_off + 8 });
    this.setState({ start_off: this.state.start_off + 8 });
    await GetRecentBook(this.state.start_off, this.state.end_off).then(
      (res) => {
        // let array = [];
        // for (let i = 0; i < res.length; i++) {
        //   let item = {
        //     community: {
        //       name: res[i].name,
        //       description: res[i].description,
        //       member_count: res[i].member_count,
        //       avatar: res[i].avatar,
        //       jalali_date: res[i].jalali_date,
        //     },
        //   };
        //   array.push(item);
        // }
        res.forEach((value) => {
          this.state.books.push(value);
        });
        this.setState({ books: this.state.books });
        let book = this.state.books.reduce((prev, curr) =>
          prev.Cost < curr.Cost ? prev : curr
        );

        book = this.state.books.reduce((prev, curr) =>
          prev.Cost > curr.Cost ? prev : curr
        );
        this.setState({ maxValue: book.price });
        if (res.length == 8) {
          this.setState({ hasmore: true });
        } else {
          this.setState({ hasmore: false });
        }
      }
    );
    await this.filter();
  };
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div style={{ padding: "2vh" }}>
          <Grid container>
            <Grid item lg={3} xs={12} md={12}>
              <Card style={{ minHeight: "30vh" }}>
                <div style={{ padding: "5vh", paddingBottom: "0" }}>
                  <Typography
                    id="range-slider"
                    style={{ fontSize: "2vh" }}
                    gutterBottom
                  >
                    جستجو
                  </Typography>
                  <TextField
                    variant="filled"
                    style={{ width: "100%" }}
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                  />
                </div>

                <div style={{ padding: "5vh" }}>
                  <Typography
                    id="range-slider"
                    style={{ fontSize: "2vh" }}
                    gutterBottom
                  >
                    قیمت
                  </Typography>
                  <this.IOSSlider
                    style={{ paddingTop: "5vh" }}
                    value={this.state.value}
                    onChange={this.handleChange}
                    valueLabelDisplay="on"
                    valueLabelFormat={(val) => {
                      return val + "تومان";
                    }}
                    min={this.state.minValue}
                    max={this.state.maxValue}
                    step={1000}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item lg={9} style={{ overflowY: "hidden", padding: "1vh" }}>
              <InfiniteScroll
                dataLength={this.state.shownBooks.length}
                next={this.fetchData}
                hasMore={this.state.hasmore}
                loader={
                  <div style={{ textAlign: "center" }}>
                    <CircularProgress color="secondary" size="2rem" />
                  </div>
                }
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>متاسفانه تموم شد!</b>
                  </p>
                }
                style={{ overflowY: "hidden" }}
              >
                <Grid container style={{ overflowY: "hidden", padding: "2vh" }}>
                  {this.state.shownBooks.map((item) => {
                    return (
                      // <div className="col-12 col-md-6 col-xl-4">

                      <Grid
                        item
                        xs={12}
                        lg={3}
                        md={4}
                        style={{ padding: "1vh" }}
                      >
                        <Book1
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
              </InfiniteScroll>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default ShowBooks;
