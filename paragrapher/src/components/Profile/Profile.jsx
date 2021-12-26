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
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import EditIcon from "@material-ui/icons/Edit";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PhoneIcon from "@material-ui/icons/Phone";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import React, { Component } from "react";
import { theme } from "../theme";
//import communityBgImage from "../assets/CommunityTestBg.png";
import Paragraph from "../Paragraph/Paragraph";
import {
  JoinCommunity,
  EnableNotification,
  CheckCommunityJoined,
  CheckCommunitySubscribed,
  LeaveCommunity,
  GetCommunityInfo,
  BestCommunityParagraphs,
  GetCommunityParagraphs,
} from "../../Utils/Connection";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { getUser, persianDate } from "../../Utils/Common";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
import BadgeAvatars from "../Profile/Avatar";
import MyParagraphList from "./MyParagraphList";
import MyCommunityList from "./MyCommunityList";
import { Link } from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import JoindCommunityList from "./JoindCommunityList";
import { EditBio, EditPass, EditDob, EditName } from "../../Utils/Connection";
import { CardHeader } from "@material-ui/core";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      name: "",
      bio: "",
      dob: "",
      oldPass: "",
      newPass: "",
      confirmNewPass: "",
      img: null,
      new_img: null,
      loaded: 0,
      new_img_src: null,
      myCommunityList: [],
      joindCommunityList: [],
      myParagraphs: [],
      tabValue: this.props.initialTabValue,
      Notifications: [],
    };
  }

  componentDidMount() {
    this.loadData();
    this.loadParagraphs();
    this.loadNotifications();
  }

  loadNotifications = async () => {
    await axios.get(makeURL(references.url_notifications)).then((res) => {
      this.setState({ Notifications: res.data[0] });
    });
    this.setState({ Notifications: this.state.Notifications.reverse() });
  };

  handleselectedFile = (event) => {
    this.setState({
      new_img: event.target.files[0],
      loaded: 0,
      new_img_src: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleUpload = () => {
    const data = new FormData();
    data.append("file", this.state.new_img);
    console.log("data append   ", data);

    axios
      .post(makeURL(references.url_upload_pp), data, {
        onUploadProgress: (ProgressEvent) => {
          console.log("progress event", ProgressEvent);
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
          if ((ProgressEvent.loaded / ProgressEvent.total) * 100 == 100) {
            window.location.reload();
          }
        },
      })
      .then((res) => {
        console.log(res.statusText);
      });
  };

  loadData = async () => {
    await axios
      .get(makeURL(references.url_profile_info))
      .then((response) => {
        console.log(response.data[0].communities);
        for (let i = 0; i < response.data[0].communities.length; i++) {
          console.log(i, response.data[0].communities[i].role);
          if (response.data[0].communities[i].role === 1) {
            console.log(i);
            this.setState({
              myCommunityList: this.state.myCommunityList.concat(
                response.data[0].communities[i]
              ),
            });

            //this.setState({ myCommunityList: response.data[0].username });
          } else {
            this.setState({
              joindCommunityList: this.state.joindCommunityList.concat(
                response.data[0].communities[i]
              ),
            });
          }
        }
        //this.setState({myCommunityList: response.data[0].communities});
        //console.log(response.data[0].communities[0].community.link,"1111111");
        //console.log(response.data[0].communities.length,"******");
        this.setState({ username: response.data[0].username });
        this.setState({ email: response.data[0].email });
        this.setState({ name: response.data[0].profile_name });
        this.setState({ bio: response.data[0].bio });
        this.setState({ dob: response.data[0].dob });
        this.setState({ img: response.data[0].avatar });
        console.log(response.data[0].avatar);
        console.log("********************************", response.data[0].dob);
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  loadParagraphs = async () => {
    await axios
      .get(makeURL(references.url_myparagraph))
      .then((response) => {
        console.log("para###", response.data.res);
        for (let i = 0; i < response.data.res.length; i++) {
          //console.log(i, response.data[0].communities[i].role);
          console.log(i);
          console.log(response.data.res[i].community_name);
          this.setState({
            myParagraphs: this.state.myParagraphs.concat(response.data.res[i]),
          });
        }
      })
      .catch((error) => {
        window.alert(error);
      });
  };
  checkPassBeforeSend() {
    if (this.state.confirmNewPass !== this.state.newPass) {
      document.getElementById("errors").innerHTML =
        "رمز جدید و تکرار آن مطابقت ندارد!";
    } else {
      this.EditPass();
    }
  }
  EditPass = async () => {
    let message = "";
    await axios
      .post(makeURL(references.url_change_pass), {
        old_password: this.state.oldPass,
        new_password: this.state.newPass,
      })
      .then((response) => {
        if (response.data.message == "Wrong password entered.") {
          document.getElementById("errors").innerHTML =
            "پسور وارد شده با پسور قبلی شما مطابقت ندارد";
        } else {
          window.alert("رمز شما با موفقیت تغییر کرد");
          window.location.reload();
        }
      })
      .catch((error) => {
        // window.alert("خطای سرور. لطفا دوباره تلاش کنید");
        console.log(error, error.response.data);
        if (error.response.data.message == "Wrong password entered.") {
          document.getElementById("errors").innerHTML =
            "پسور وارد شده با پسور قبلی شما مطابقت ندارد";
        } else if (error.response.status == 401) {
          message = error.response.data.message;
        } else {
          message = error.response.data;
        }
      });
    return message;
  };
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
                  <Tabs
                    centered
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    value={this.state.tabValue}
                  >
                    <Tab
                      icon={<EditIcon />}
                      label="ویرایش مشخصات"
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 0 })}
                      active
                    />
                    <Tab
                      icon={<ChatIcon />}
                      label="پاراگراف های من"
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 1 })}
                    />
                    <Tab
                      label="کامیونیتی های من"
                      icon={<PeopleIcon />}
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 2 })}
                    />
                    <Tab
                      label="کامیونیتی های عضو شده"
                      icon={<PeopleOutlineIcon />}
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 3 })}
                    />
                    <Tab
                      label="اطلاعیه ها"
                      icon={<PeopleOutlineIcon />}
                      style={{ fontFamily: "BYekan" }}
                      onClick={() => this.setState({ tabValue: 4 })}
                    />
                    {/* <Tab icon={<MenuBookIcon />} label="کتابهای خریداری شده"
                       style={{ fontFamily: "BYekan" }} 
                       disabled
                       onClick={() => this.setState({ tabValue: 4 })}
                       /> */}
                  </Tabs>
                </Paper>
                <Box
                  p={3}
                  hidden={this.state.tabValue != 0}
                  style={{ minHeight: "54.5vh" }}
                >
                  <div className="container p-5 py-2">
                    <div className="row p-1">
                      <div id="liveAlertPlaceholder"></div>
                    </div>
                    <div
                      className="row rounded bg-white"
                      id="changeProfile"
                      style={{ overflow: "hidden" }}
                    >
                      <div className="col-12 p-3 col-lg-3 bg-light">
                        <br />
                        <br />
                        <div className="row">
                          <div className="col"></div>
                          <div className="col">
                            <BadgeAvatars
                              src={references.url_address + this.state.img}
                              h="100px"
                              w="100px"
                            />
                          </div>
                          <div className="col"></div>
                        </div>
                        <br />
                        <br />
                        <div className="row py-2">
                          <div className="col"></div>

                          <div className="col"></div>
                        </div>
                        <div className="row mb-4">
                          <div className="col"></div>
                          <div className="col-8">
                            <Button
                              color="secondary"
                              variant="contained"
                              component="span"
                              className="w-100"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                              style={{ fontFamily: "BYekan" }}
                            >
                              تغییر تصویر
                            </Button>
                          </div>
                          <div className="col"></div>
                        </div>
                        <div className="row">
                          <div className="col"></div>
                          <div className="col-8">
                            <Button
                              color="secondary"
                              variant="contained"
                              component="span"
                              className="w-100"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() =>
                                (document.getElementById("errors").innerHTML =
                                  "")
                              }
                              style={{ fontFamily: "BYekan" }}
                            >
                              تغییر رمز
                            </Button>
                          </div>
                          <div className="col"></div>
                        </div>

                        <div
                          className="modal fade"
                          id="exampleModal1"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel1"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel1"
                                >
                                  تغییر تصویر کاربری{" "}
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="row">
                                  <div className="col"></div>
                                  <div className="col">
                                    <BadgeAvatars
                                      src={this.state.new_img_src}
                                      h="150px"
                                      w="150px"
                                    />
                                  </div>
                                  <div className="col"></div>
                                </div>

                                <form
                                  className="container"
                                  enctype="multipart/form-data"
                                  // onsubmit={() => window.location.reload()}
                                >
                                  <div className="form-inline justify-content-center mt-5">
                                    <label
                                      htmlFor="image"
                                      className="ml-sm-4 font-weight-bold mr-md-4 mb-5"
                                    >
                                      تصویر :{" "}
                                    </label>
                                    <div className="input-group">
                                      <input
                                        type="file"
                                        id="image"
                                        name="file"
                                        accept="image/*"
                                        className="file-custom"
                                        onChange={this.handleselectedFile}
                                      />
                                    </div>
                                  </div>

                                  <div className="input-group justify-content-center mt-4">
                                    <button
                                      type="button"
                                      className="btn btn-md btn-primary"
                                      onClick={this.handleUpload}
                                    >
                                      ارسال
                                    </button>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer"></div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  تغییر رمز عبور{" "}
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="mb-3 ms-3 row">
                                  <label
                                    for="oldPass"
                                    className="col-sm-3 col-form-label"
                                  >
                                    رمز قدیم
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="password"
                                      className="form-control"
                                      id="oldPass"
                                      defaultValue={this.state.oldPass}
                                      onChange={(e) =>
                                        this.setState({
                                          oldPass: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="mb-3 ms-3 row">
                                  <label
                                    for="newPass"
                                    className="col-sm-3 col-form-label"
                                  >
                                    رمز جدید
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="password"
                                      className="form-control"
                                      id="newPass"
                                      defaultValue={this.state.newPass}
                                      onChange={(e) =>
                                        this.setState({
                                          newPass: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="mb-3 ms-3 row">
                                  <label
                                    for="confirmNewPass"
                                    className="col-sm-3 col-form-label"
                                  >
                                    تکرار رمز جدید{" "}
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="password"
                                      className="form-control"
                                      id="confirmNewPass"
                                      defaultValue={this.state.confirmNewPass}
                                      onChange={(e) =>
                                        this.setState({
                                          confirmNewPass: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="mb-3 ms-3 row">
                                  <span
                                    id="errors"
                                    className="text-danger"
                                  ></span>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  انصراف
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => this.checkPassBeforeSend()}
                                >
                                  ذخیره{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 p-3 col-lg-9 px-5">
                        <div className="mb-3 ms-3 row">
                          <label
                            for="email"
                            className="col-sm-3 col-form-label"
                          >
                            ایمیل:
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              readOnly
                              className="form-control-plaintext"
                              id="email"
                              defaultValue={this.state.email}
                            />
                          </div>
                        </div>
                        <div className="mb-3 row ms-3">
                          <label
                            for="username"
                            className="col-sm-3 col-form-label"
                          >
                            نام کاربری:
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              readOnly
                              className="form-control-plaintext"
                              id="username"
                              defaultValue={this.state.username}
                            />
                          </div>
                        </div>
                        <div className="mb-3 row ms-3">
                          <label for="name" className="col-sm-3 col-form-label">
                            نام:{" "}
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              defaultValue={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="mb-3 row ms-3">
                          <label
                            for="inputDob"
                            className="col-sm-3 col-form-label"
                          >
                            تاریخ تولد:{" "}
                          </label>
                          <div className="col-sm-9">
                            <TextField
                              style={{
                                marginTop: "10px",
                                width: "100%",
                                borderColor: "lightcyan",
                              }}
                              id="Dob"
                              type="date"
                              // defaultValue = {this.state.dob}
                              defaultValue="2017-05-24"
                              onChange={(e) =>
                                this.setState({ dob: e.target.value })
                              }
                              // defaultValue="2017-05-24"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              className="border border-secondary rounded"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row ms-3">
                          <label
                            for="inputBio"
                            className="col-sm-3 col-form-label"
                          >
                            {" "}
                            بیو:{" "}
                          </label>
                          <div className="col-sm-9">
                            <textarea
                              type="text"
                              className="form-control"
                              id="inputBio"
                              rows="3"
                              defaultValue={this.state.bio}
                              onChange={(e) =>
                                this.setState({ bio: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col"></div>
                          <div className="col-8">
                            <div className="d-grid gap-2">
                              {/* <button
                            className="btn btn-success"
                            type="button"
                            onClick={() => {
                              EditBio(this.state.bio);
                              {
                                EditDob(this.state.dob);
                              }
                              {
                                EditName(this.state.name);
                              }
                              alert("تغییرات با موفقیت انجام شد", "success");
                            }}
                          >
                            اعمال تغییرات
                          </button> */}

                              <Button
                                color="secondary"
                                variant="contained"
                                component="span"
                                className="w-100"
                                style={{ fontFamily: "BYekan" }}
                                onClick={() => {
                                  EditBio(this.state.bio);
                                  {
                                    EditDob(this.state.dob);
                                  }
                                  {
                                    EditName(this.state.name);
                                  }
                                  alert(
                                    "تغییرات با موفقیت انجام شد",
                                    "success"
                                  );
                                }}
                              >
                                اعمال تغییرات
                              </Button>
                            </div>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box
                  p={3}
                  hidden={this.state.tabValue != 1}
                  style={{ minHeight: "54.5vh" }}
                >
                  <div>
                    <MyParagraphList items={this.state.myParagraphs} />
                  </div>
                </Box>
                <Box
                  p={3}
                  hidden={this.state.tabValue != 2}
                  style={{ minHeight: "54.5vh" }}
                >
                  <Link to="/CreateCommunity">
                    <button type="button" className="btn btn-info">
                      ساخت کامیونیتی جدید{" "}
                    </button>
                  </Link>
                  <p></p>
                  <MyCommunityList items={this.state.myCommunityList} />
                </Box>

                <Box
                  p={3}
                  hidden={this.state.tabValue != 3}
                  style={{ minHeight: "54.5vh" }}
                >
                  <JoindCommunityList items={this.state.joindCommunityList} />
                </Box>

                <Box
                  p={4}
                  hidden={this.state.tabValue != 4}
                  style={{ minHeight: "54.5vh" }}
                >
                  <Paper style={{ padding: "3vh", backgroundColor: "#8bc0cc" }}>
                    {this.state.Notifications.map((e) => {
                      return (
                        <Card
                          style={{
                            marginBottom: "1vh",
                            boxShadow: "0.5vh 0.5vh 1vh #66838b",
                            paddingBottom: "1vh",
                          }}
                        >
                          <CardHeader
                            title={e.subject}
                            subheader={persianDate(e.date)}
                          />
                          <CardContent>
                            <Typography>{e.text}</Typography>
                            {e.subject === "خوش امدگویی" &&
                              e.text.split(" ")[2] !== "ی" && (
                                <Button
                                  onClick={() => {
                                    let value = e.text.split(" ");
                                    window.location.replace(
                                      "/community/" + value[2]
                                    );
                                  }}
                                  style={{ float: "left" }}
                                  color="secondary"
                                  variant="contained"
                                >
                                  رفتن به اجتماع
                                </Button>
                              )}
                            {e.subject.split(" ")[0] === "پاراگراف" && (
                              <Button
                                onClick={() => {
                                  window.location.replace(e.related_info);
                                }}
                                style={{ float: "left" }}
                                color="secondary"
                                variant="contained"
                              >
                                رفتن به پاراگراف
                              </Button>
                            )}
                            {e.subject === "کتاب جدید اضافه شد" && (
                              <Button
                                onClick={() => {
                                  window.location.replace(e.related_info);
                                }}
                                style={{ float: "left" }}
                                color="secondary"
                                variant="contained"
                              >
                                رفتن به کتاب
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </Paper>
                </Box>
              </div>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
function alert(message, type) {
  var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  alertPlaceholder.append(wrapper);
}
export default Profile;
