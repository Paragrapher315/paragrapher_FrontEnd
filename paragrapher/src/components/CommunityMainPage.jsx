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
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import React, { Component } from "react";
import { theme } from "./theme";
import communityBgImage from "../assets/CommunityTestBg.png";
import Paragraph from "./Paragraph/Paragraph";
import {
  JoinCommunity,
  EnableNotification,
  CheckCommunityJoined,
  CheckCommunitySubscribed,
  LeaveCommunity,
} from "../Utils/Connection";
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
  };
  async componentDidMount() {
    var splitted = window.location.toString().split("/");
    await this.setState({ name: splitted.pop() });

    this.setState({
      isJoined: await CheckCommunityJoined(this.state.name),
    });
    this.setState({
      isSub: await CheckCommunitySubscribed(this.state.name),
    });
    console.log("*** You are ", this.state.isJoined, "  ", this.state.isSub);
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
                    <Grid container>
                      <Grid item lg={2} md={2} xs={2}>
                        <div style={{ width: "100%" }}>
                          <Avatar
                            src={communityBgImage}
                            style={{ height: "15vh", width: "15vh" }}
                          />
                        </div>
                      </Grid>
                      <Grid item lg={8} md={8} xs={8}>
                        <Grid container spacing={2}>
                          <Grid item lg={12} md={12} xs={12}>
                            <Typography
                              style={{
                                fontFamily: "BYekan",
                                fontWeight: "Bold",
                                fontSize: "20px",
                              }}
                            >
                              کامیونیتی تست
                            </Typography>
                          </Grid>
                          <Grid item lg={12} md={12} xs={12}>
                            <Typography style={{ fontFamily: "BYekan" }}>
                              10000 عضو
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2} md={3} xs={3}>
                        <ButtonGroup
                          variant="contained"
                          color="primary"
                          style={{ float: "left" }}
                        >
                          <Button
                            style={{ fontFamily: "BYekan" }}
                            onClick={() => {
                              if (this.state.isJoined) {
                                LeaveCommunity(this.state.name).then(() => {
                                  CheckCommunityJoined(this.state.name).then(
                                    (b) => {
                                      this.setState({ isJoined: b });
                                      this.setState({
                                        isSub: false,
                                      });
                                    }
                                  );
                                });
                              } else {
                                JoinCommunity(this.state.name).then(() => {
                                  CheckCommunityJoined(this.state.name).then(
                                    (b) => {
                                      this.setState({ isJoined: b });
                                    }
                                  );
                                });
                              }
                            }}
                          >
                            {this.state.isJoined ? "لغو عضویت" : "عضویت"}
                          </Button>
                          <Button>
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
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 1 })}
                    />
                    <Tab
                      label="فروشگاه"
                      disabled
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
                <Box p={3} hidden={this.state.tabValue != 0}>
                  <div style={{ padding: "0 10vw" }}>
                    {this.state.bestParagraphs.map((bp) => (
                      <Paragraph
                        author={bp.author}
                        isPotd={false}
                        date={bp.date}
                        avatar="ا"
                        canAction={true}
                        text={bp.text}
                      />
                    ))}
                  </div>
                </Box>
                <Box p={3} hidden={this.state.tabValue != 1}>
                  <div style={{ padding: "0 10vw" }}>
                    {this.state.allParagraphs.map((p) => (
                      <Paragraph
                        author={p.author}
                        isPotd={false}
                        date={p.date}
                        avatar="ا"
                        canAction={true}
                        text={p.text}
                      />
                    ))}
                  </div>
                </Box>
                <Box p={3} hidden={this.state.tabValue != 3}>
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
