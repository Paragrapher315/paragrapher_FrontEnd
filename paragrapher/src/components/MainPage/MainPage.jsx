/* eslint-disable eqeqeq */
import React, { Component, useEffect, useState } from "react";
import { Grid, Hidden, Card, CardActions } from "@material-ui/core";
import Paragraph from "../Paragraph/Paragraph";
import { theme, useStyles } from "../theme";
import TopCommunities from "../TopCommunities";
import RecentProducts from "../RecentProducts";
import { CardContent } from "@mui/material";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { getUser } from "../../Utils/Common";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import rtl from "jss-rtl";
import { create } from "jss";
import CreateIcon from "@material-ui/icons/Create";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";
// import Particles from "react-tsparticles";
import { CircularProgress, CardHeader } from "@material-ui/core";
import references from "../../assets/References.json";
import Skeleton from "@material-ui/lab/Skeleton";
import { jssPreset, StylesProvider, ThemeProvider } from "@material-ui/styles";
import {
  GetHeaderProfile,
  GetMyCommunities,
  ParagraphArray,
  RefreshLogin,
  GetCommunities,
} from "../../Utils/Connection";
function MainPage(props) {
  const classes = useStyles(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const [darkMode, setDarkMode] = useState(false);
  const history = useHistory();
  // const [innerCreateParaTrigger, setInnerCreateParaTrigger] = useState(false);
  function getData(val, val2) {
    props.sendData(val, val2);
  }
  function setCreatePara() {
    // props.openCreator();
    history.push("/paragraph/create");
  }
  function getDataComment(val, val2) {
    props.sendDataComment(val, val2);
  }
  useEffect(() => {
    RefreshLogin().then(() => {
      console.log("Login Refereshed");
    });
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <Hidden mdUp>
            <Fab
              variant="extended"
              color="primary"
              className={classes.extendedIcon}
              onClick={setCreatePara}
            >
              <AddIcon />
              <Typography className={classes.typography}>گراف کنید</Typography>
            </Fab>
          </Hidden>
          {/* <Particles
        options={{
          particles: {
            move: {
              enable: true,
            },
          },
          fullScreen: {
            enable: true,
            zIndex: -10000, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
          },
        }}
      /> */}
          {/* <Switch
        checked={darkMode}
        onChange={() => {
          setDarkMode(!darkMode);
        }}
        name="darkModeSwitch"
        inputProps={{ "aria-label": "secondary checkbox" }}
      /> */}
          <Grid
            container
            // spacing={2}
            // justify="center"
            style={{ padding: "2vh 10vw" }}
          >
            <Grid item lg={8} md={8} xs={12}>
              <Grid container spacing={2} style={{ padding: "0 2vw" }}>
                <Grid item xs={12}>
                  {/* <Paragraph
                    user="کیا"
                    date="26 آبان 1400"
                    isPotd={true}
                    communityName="mamad"
                    avatar="ک"
                    author="نیچه"
                    tags={["ترسناک", "جنایی", "ماجرایی"]}
                    canAction={true}
                    isMine={true}
                    book="فلان"
                    sendData={getData}
                    sendDataComment={getDataComment}
                    p_id={"20211127205112352646,20211127205124664310"}
                    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                  /> */}
                  <ParagraphOfTheDay />
                </Grid>
                <Hidden xsDown>
                  <Grid item lg={12} md={12}>
                    <ParaCreate />
                  </Grid>
                </Hidden>
                <Grid item xs={12}>
                  {/* <InfiniteScroll
                    dataLength={theArr.length}
                    next={() => {
                      start_off += 10;
                      end_off += 10;
                      paragraphs = getMainData();
                    }}
                  ></InfiniteScroll> */}
                  {/* {paragraphs.map((element) => {
                    console.log(element);
                    console.log(paragraphs);
                    return (
                      <Paragraph user={element.user_id} text={element.p_text} />
                    );
                  })} */}
                  <ParagraphList
                    sendData={getData}
                    sendDataComment={getDataComment}
                    classes={classes}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Hidden xsDown>
              <Grid item lg={4} md={4} xs={12}>
                <div style={{ position: "sticky", top: "11vh" }}>
                  <TopCommunities />
                  <RecentProducts />
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export class ParagraphOfTheDay extends React.Component {
  state = {
    paragraphs: [],
    start_off: 0,
    end_off: 1,
    communities: [],
    hasmore: true,
  };
  getData = (params) => {
    this.props.sendData(params[0], params[1]);
  };
  getCommentData = (params) => {
    this.props.sendData(params[0], params[1]);
  };
  componentDidMount() {
    const d = new Date();
    GetMyCommunities().then((res) => {
      Array.isArray(res.data) &&
        res.data.forEach((element) => {
          this.state.communities.push(element.name);
        });
      this.setState({ communities: this.state.communities });
    });
    ParagraphArray(d, this.state.start_off, this.state.end_off).then((res) => {
      this.setState({
        paragraphs: res,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.paragraphs.map((element) => {
          return (
            <Paragraph
              user={element.username}
              text={element.text}
              date={element.date}
              communityName={element.communityName}
              avatar={element.userAvatar}
              author={element.author}
              tags={element.tags.split(",")}
              isMine={element.username == getUser()}
              book={element.book}
              sendData={this.props.sendData}
              sendDataComment={this.props.sendDataComment}
              p_id={element.id}
              isPotd={true}
              userID={element.user_id}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              canAction={this.state.communities.includes(element.communityName)}
              likeCount={element.imaCount}
              commentCount={element.replyCount}
            />
          );
        })}
      </div>
    );
  }
}

export class ParagraphList extends Component {
  state = {
    paragraphs: [],
    start_off: 2,
    end_off: 10,
    communities: [],
    hasmore: false,
  };
  getData = (params) => {
    this.props.sendData(params[0], params[1]);
  };
  getCommentData = (params) => {
    this.props.sendData(params[0], params[1]);
  };
  componentDidMount() {
    const d = new Date();
    GetMyCommunities().then((res) => {
      Array.isArray(res.data) &&
        res.data.forEach((element) => {
          this.state.communities.push(element.name);
        });
      this.setState({ communities: this.state.communities });
    });
    ParagraphArray(d, this.state.start_off, this.state.end_off).then((res) => {
      this.setState({
        paragraphs: res,
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
    ParagraphArray(d, this.state.start_off, this.state.end_off).then((res) => {
      res.forEach((value) => {
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

  render() {
    return (
      <div>
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
                      <Skeleton animation="wave" height="1vh" width="25%" />
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
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>متاسفانه تموم شد!</b>
            </p>
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
                user={element.username}
                text={element.text}
                date={element.date}
                communityName={element.communityName}
                avatar={element.userAvatar}
                author={element.author}
                tags={element.tags.split(",")}
                canAction={true}
                isMine={element.username == getUser()}
                book={element.book}
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
      </div>
    );
  }
}

export default MainPage;

export class ParaCreate extends React.Component {
  state = {
    avatar: "",
    username: "",
    communityName: "",
  };
  setCreatePara = () => {
    // props.openCreator();
    window.location.replace("/paragraph/create/" + this.state.communityName);
  };
  componentDidMount = async () => {
    await GetHeaderProfile().then((res) => {
      this.setState({ avatar: res.avatar });
      this.setState({ username: res.username });
    });
    if (this.props.communityName !== undefined) {
      this.setState({ communityName: this.props.communityName });
    }
  };

  render() {
    return (
      <div style={{ marginBottom: "2vh" }}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item lg={1} md={1}>
                <Avatar src={references.url_address + this.state.avatar}>
                  {this.state.username[0]}
                </Avatar>
              </Grid>
              <Grid item lg={10} md={10} style={{ paddingRight: "1vw" }}>
                <TextField
                  variant="filled"
                  label="گراف کنید"
                  style={{
                    direction: "rtl",
                    textAlign: "right",
                    width: "100%",
                  }}
                  inputProps={{
                    textAlign: "right",
                    fontFamily: "BYekan",
                  }}
                  onClick={this.setCreatePara}
                ></TextField>
              </Grid>
              <Grid item lg={1} md={1}>
                <IconButton
                  variant="outlined"
                  color="secondary"
                  onClick={this.setCreatePara}
                  // style={{ marginRight: "1vw" }}
                >
                  <CreateIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}
