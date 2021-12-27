import React, { Component } from "react";
import {
  TextField,
  Typography,
  Switch,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  Button,
  Avatar,
  ThemeProvider,
} from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { theme } from "./theme";
import { AddBookToShop, AddBookPic } from "../Utils/Connection";
import { AllInboxOutlined } from "@material-ui/icons";
class AddBook extends React.Component {
  state = {
    showAddImageButton: false,
    bookImage: null,
    bookImageURL: null,
    bookName: null,
    bookAuthor: null,
    bookGenre: null,
    bookPrice: null,
    bookInfo: null,
    communityName: null,
    emptyBookName: false,
    emptyAuthor: false,
    emptyGenre: false,
    emptyPrice: false,
    emptyInfo: false,
    hasEmpty: false,
  };
  CheckEmpty() {
    this.setState({
      emptyAuthor: false,
      emptyBookName: false,
      emptyGenre: false,
      emptyPrice: false,
      emptyInfo: false,
      hasEmpty: false,
    });
    if (this.state.bookName == null || this.state.bookName == "") {
      this.setState({ emptyBookName: true, hasEmpty: true });
    }
    if (this.state.bookAuthor == null || this.state.bookAuthor == "") {
      this.setState({ emptyAuthor: true, hasEmpty: true });
    }
    if (this.state.bookGenre == null || this.state.bookGenre == "") {
      this.setState({ emptyGenre: true, hasEmpty: true });
    }
    if (this.state.bookPrice == null || this.state.bookPrice == "") {
      this.setState({ emptyPrice: true, hasEmpty: true });
    }
    if (this.state.bookInfo == null || this.state.bookInfo == "") {
      this.setState({ emptyInfo: true, hasEmpty: true });
    }
  }
  async HandleAddBook() {
    await this.CheckEmpty();
    if (this.state.hasEmpty === false) {
      await AddBookToShop(
        this.state.communityName,
        this.state.bookName,
        this.state.bookGenre,
        this.state.bookAuthor,
        this.state.bookInfo,
        this.state.bookPrice
      ).then((res) => {
        console.log(res);
        this.handleImageUpload(res).then(() => {
          window.location.replace(
            "/community/" + this.state.communityName + "/ShowBook/" + res
          );
        });
        // console.log("this is image file", this.state.bookImage);
        // console.log("this is res of book", res);
      });
    }
  }
  async componentDidMount() {
    var splitted = window.location.toString().split("/");
    // console.log(splitted.pop());
    while (splitted.pop() !== "AddBook") {
      console.log("Not yet");
    }
    await this.setState({ communityName: splitted.pop() });
    console.log(this.state.communityName);
  }
  HandleFileSelect = (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    console.log("We are in file select handler", e.target.files);
    this.setState({
      bookImage: e.target.files[0],
      bookImageURL: URL.createObjectURL(e.target.files[0]),
    });
    // const fileReader = new FileReader();
    // fileReader.onload = (ev) => {
    //   console.log("this is file reader result", fileReader.result);
    //   // this.background.style.backgroundImage = `url(${fileReader.result})`;
    //   console.log("File target is", e.target.file[0]);
    //   fileReader.readAsDataURL(e.target.files[0]).then(() => {
    //     this.setState({ bookImage: e.target.files[0] });
    //     console.log("file image selected and state is set");
    //   });
    // };
    // console.log(this.state.bookImage);
  };
  handleImageUpload = async (bookID) => {
    const data = new FormData();
    data.append("file", this.state.bookImage);
    await AddBookPic(this.state.communityName, bookID, data).then();
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Card style={{ padding: "3vh 1vw", margin: "2vh 5vw" }}>
          <form>
            <Grid container>
              <Grid item xs={12} lg={4} md={4} style={{ padding: "0 1vw" }}>
                {/* <div
                  style={{
                    borderRadius: "15%",
                    backgroundColor: "gray",
                    width: "80%",
                    paddingTop: "80%",
                    margin: "auto",
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                  ref={(bg) => (this.background = bg)}
                  onMouseEnter={() =>
                    this.setState({ showAddImageButton: true })
                  }
                  onMouseLeave={() =>
                    this.setState({ showAddImageButton: false })
                  }
                >
                  {this.state.showAddImageButton ? (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "45%",
                        right: "45%",
                        padding: "1vh 1vw",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        this.fileInput.click();
                      }}
                    >
                      <AddAPhotoIcon />
                      <input
                        type="file"
                        onChange={this.HandleFileSelect}
                        ref={(fi) => (this.fileInput = fi)}
                        style={{ display: "none" }}
                      />
                    </div>
                  ) : null}
                </div> */}
                <Card
                  style={{
                    width: "100%",
                    height: "100%",
                    boxShadow: "0vh 0vw 5vh 1vh #396b74",
                    // margin: "0 1vw",
                  }}
                  onMouseEnter={() =>
                    this.setState({ showAddImageButton: true })
                  }
                  onMouseLeave={() =>
                    this.setState({ showAddImageButton: false })
                  }
                >
                  <Avatar
                    varient="square"
                    src={this.state.bookImageURL}
                    style={{ height: "100%", width: "100%", borderRadius: "0" }}
                  >
                    {this.state.showAddImageButton ? (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "45%",
                          right: "45%",
                          padding: "1vh 1vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          this.fileInput.click();
                        }}
                      >
                        <AddAPhotoIcon />
                        <input
                          type="file"
                          onChange={this.HandleFileSelect}
                          ref={(fi) => (this.fileInput = fi)}
                          style={{ display: "none" }}
                        />
                      </div>
                    ) : (
                      "عکس"
                    )}
                  </Avatar>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                lg={8}
                md={8}
                style={{ padding: "0 1vw", margin: "auto" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="filled"
                      label="نام کتاب"
                      style={{
                        direction: "rtl",
                        textAlign: "right",
                        width: "100%",
                      }}
                      onChange={(e) => {
                        this.setState({ bookName: e.target.value });
                      }}
                      onClick={() => {
                        console.log(this.state.bookImage);
                      }}
                      error={this.state.emptyBookName}
                      helperText={
                        this.state.emptyBookName
                          ? "نام کتاب نمی تواند خالی باشد"
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="filled"
                      label="نام نویسنده"
                      style={{
                        direction: "rtl",
                        textAlign: "right",
                        width: "100%",
                      }}
                      onChange={(e) => {
                        this.setState({ bookAuthor: e.target.value });
                      }}
                      error={this.state.emptyAuthor}
                      helperText={
                        this.state.emptyAuthor
                          ? "نام نویسنده نمی تواند خالی باشد"
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="filled"
                      label="ژانر"
                      style={{
                        direction: "rtl",
                        textAlign: "right",
                        width: "100%",
                      }}
                      onChange={(e) => {
                        this.setState({ bookGenre: e.target.value });
                      }}
                      error={this.state.emptyGenre}
                      helperText={
                        this.state.emptyGenre
                          ? "ژانر کتاب نمی تواند خالی باشد"
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="filled"
                      label="قیمت"
                      style={{
                        direction: "rtl",
                        textAlign: "right",
                        width: "100%",
                      }}
                      onChange={(e) => {
                        this.setState({ bookPrice: e.target.value });
                      }}
                      error={this.state.emptyPrice}
                      helperText={
                        this.state.emptyPrice
                          ? "قیمت کتاب نمی تواند خالی باشد"
                          : ""
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{ padding: "0 1vw", marginTop: "2vh" }}
            >
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  label="توضیحات"
                  style={{
                    direction: "rtl",
                    textAlign: "right",
                    width: "100%",
                  }}
                  multiline
                  minRows={7}
                  maxRows={7}
                  onChange={(e) => {
                    this.setState({ bookInfo: e.target.value });
                  }}
                  error={this.state.emptyInfo}
                  helperText={
                    this.state.emptyInfo
                      ? "توضیحات کتاب نمی تواند خالی باشد"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ float: "left" }}
                  onClick={() => this.HandleAddBook()}
                >
                  افزودن کتاب
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </ThemeProvider>
    );
  }
}

export default AddBook;
