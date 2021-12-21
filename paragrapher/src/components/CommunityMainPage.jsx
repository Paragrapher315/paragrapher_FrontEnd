import {
  Typography,
  Button,
  Grid,
  ButtonGroup,
  TextField,
  ThemeProvider,
  Avatar,
  Hidden,
  Card,
  CardContent,
  Tabs,
  Tab,
  Box,
  AppBar,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import React, { Component } from "react";
import { theme } from "./theme";
import communityBgImage from "../assets/CommunityTestBg.png";
import references from "../assets/References.json";
import Paragraph from "./Paragraph/Paragraph";
import {
  JoinCommunity,
  EnableNotification,
  CheckCommunityJoined,
  CheckCommunitySubscribed,
  LeaveCommunity,
  GetCommunityInfo,
  BestCommunityParagraphs,
  GetCommunityParagraphs,
  AllBooks,
} from "../Utils/Connection";
import { getUser } from "../Utils/Common";
import Book from "./Shop/Book";
import Shop from "./Shop/Shop";
import Book1 from "./Shop/Book1";
import Shop1 from "./Shop/Shop1";
class CommunityMainPage extends React.Component {
  state = {
    tabValue: 0,
    allParagraphs: [],
    bio: "",
    bestParagraphs: [],
    avatarURL: "",
    name: "",
    isJoined: false,
    isSub: false,
    membersCount: 0,
    books: [],
    addbookLink: "",
  };
  async componentDidMount() {
    var splitted = decodeURIComponent(window.location.toString()).split("/");
    console.log(splitted);
    console.log(window.location.toString());
    if (splitted[splitted.length - 1] === "") {
      splitted.pop();
    }
    await this.setState({ name: splitted.pop() });
    this.setState({
      isJoined: await CheckCommunityJoined(this.state.name),
    });
    this.setState({
      isSub: await CheckCommunitySubscribed(this.state.name),
    });
    console.log("*** You are ", this.state.isJoined, "  ", this.state.isSub);
    var communityInfo = await GetCommunityInfo(this.state.name);
    console.log("community info is", communityInfo);
    this.setState({ bio: communityInfo.data.description });
    this.setState({ membersCount: communityInfo.data.member_count });
    this.setState({ avatarURL: communityInfo.data.avatar });
    if (this.state.avatarURL === null) {
      this.setState({
        avatarURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0WbvoW6vkO4ntTlpvJSOP7R0lqudCQN9bQ&usqp=CAU",
      });
    }
    BestCommunityParagraphs(this.state.name).then((ret) => {
      this.setState({ bestParagraphs: ret.data });
    });
    AllBooks(this.state.name).then((ret) => {
      console.log("%%%%%%%", ret.data.books);
      this.setState({ books: ret.data.books });
    });
    if (this.state.isJoined) {
      GetCommunityParagraphs(this.state.name, 0, 30).then((ret) => {
        this.setState({ allParagraphs: ret.data });
      });
    }
    this.addbookLink = "/community/" + this.state.name + "/AddBook/";
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <div style={{ padding: "1vh 10vw" }}>
            <Grid container spacing={2}>
              <div style={{ width: "100%" }}>
                <Paper
                  style={{
                    width: "100%",
                    padding: "3vh 3vw 0 3vw",
                    marginTop: "2vh",
                  }}
                >
                  <Grid item xs={12}>
                    <Grid container spacing={1}>
                      <Grid item lg={2} md={2} xs={6}>
                        <div style={{ width: "15vh", height: "15vh" }}>
                          <Avatar
                            src={this.state.avatarURL}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Grid>
                      <Grid item lg={10} md={10} xs={6}>
                        <Grid container>
                          <Grid item lg={9} md={9} xs={12}>
                            <Grid container spacing={1}>
                              <Grid item lg={12} md={12} xs={12}>
                                <Typography
                                  style={{
                                    fontFamily: "BYekan",
                                    fontWeight: "Bold",
                                    fontSize: "20px",
                                  }}
                                >
                                  کامیونیتی {this.state.name}
                                </Typography>
                              </Grid>
                              <Grid item lg={12} md={12} xs={12}>
                                <Typography style={{ fontFamily: "BYekan" }}>
                                  {this.state.membersCount} عضو
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item lg={3} md={3} xs={12}>
                            <ButtonGroup
                              variant="contained"
                              color="primary"
                              // style={{ float: "left" }}
                            >
                              <Button
                                style={{ fontFamily: "BYekan" }}
                                onClick={() => {
                                  if (this.state.isJoined) {
                                    LeaveCommunity(this.state.name).then(() => {
                                      CheckCommunityJoined(
                                        this.state.name
                                      ).then((b) => {
                                        this.setState({ isJoined: b });
                                        this.setState({
                                          isSub: false,
                                        });
                                        window.location.reload();
                                      });
                                    });
                                  } else {
                                    JoinCommunity(this.state.name).then(() => {
                                      CheckCommunityJoined(
                                        this.state.name
                                      ).then((b) => {
                                        this.setState({ isJoined: b });
                                        window.location.reload();
                                      });
                                    });
                                  }
                                }}
                              >
                                {this.state.isJoined ? "لغو عضویت" : "عضویت"}
                              </Button>
                              <Button disabled={!this.state.isJoined}>
                                {this.state.isSub ? (
                                  <NotificationsActiveIcon
                                    onClick={() => {
                                      EnableNotification(this.state.name);
                                      this.setState({
                                        isSub: !this.state.isSub,
                                      });
                                    }}
                                  />
                                ) : (
                                  <NotificationsIcon
                                    onClick={() => {
                                      EnableNotification(this.state.name);
                                      this.setState({
                                        isSub: !this.state.isSub,
                                      });
                                    }}
                                  />
                                )}
                              </Button>
                            </ButtonGroup>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Tabs
                    centered
                    indicatorColor="primary"
                    value={this.state.tabValue}
                  >
                    <Tab
                      label="خانه"
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 0 })}
                    />
                    <Tab
                      label="پاراگراف ها"
                      disabled={!this.state.isJoined}
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 1 })}
                    />
                    <Tab
                      label="فروشگاه"
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 2 })}
                    />
                    <Tab
                      label="درباره ما"
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 3 })}
                    />
                  </Tabs>
                </Paper>
                <Box
                  p={3}
                  hidden={this.state.tabValue != 0}
                  style={{ minHeight: "54.5vh" }}
                >
                  <div>
                    {this.state.bestParagraphs.map((bp) => (
                      <Paragraph
                        user={bp.user_name}
                        isPotd={false}
                        date={bp.date}
                        avatar={bp.avatar}
                        canAction={this.state.isJoined}
                        text={bp.p_text}
                        author={bp.author}
                        tags={bp.tags.split(",")}
                        p_id={bp.id}
                        book={bp.ref_book}
                        isMine={bp.user_name == getUser()}
                        communityName={bp.community_name}
                      />
                    ))}
                  </div>
                </Box>
                <Box
                  p={3}
                  hidden={this.state.tabValue != 1}
                  style={{ minHeight: "54.5vh" }}
                >
                  <div>
                    {this.state.allParagraphs.map((p) => (
                      <Paragraph
                        user={p.user_name}
                        isPotd={false}
                        date={p.date}
                        avatar={p.avatar}
                        canAction={this.state.isJoined}
                        text={p.p_text}
                        author={p.author}
                        tags={p.tags.split(",")}
                        p_id={p.id}
                        book={p.ref_book}
                        isMine={p.user_name == getUser()}
                        communityName={p.community_name}
                      />
                    ))}
                  </div>
                </Box>
                <Box
                  p={3}
                  hidden={this.state.tabValue != 2}
                  style={{ minHeight: "54.5vh" }}
                >
                  <Grid item xs={12}>
                    <Link to={this.addbookLink}>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ fontFamily: "BYekan" }}
                      >
                        افزودن کتاب برای فروش
                      </Button>
                    </Link>

                    <p />
                    <Shop1 items={this.state.books} />
                  </Grid>
                </Box>
                <Box
                  p={3}
                  hidden={this.state.tabValue != 3}
                  style={{ minHeight: "54.5vh" }}
                >
                  <Grid item xs={12}>
                    <Card>
                      <CardContent>
                        <Typography style={{ fontFamily: "BYekan" }}>
                          {this.state.bio}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Box>
              </div>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default CommunityMainPage;
