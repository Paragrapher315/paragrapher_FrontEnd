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
import { EditBookData, AddBookPic } from "../Utils/Connection";
import { AllInboxOutlined } from "@material-ui/icons";
import { LoadBookData } from "../Utils/Connection";
import references from "../assets/References.json";

class EditBook extends React.Component {
  state = {
    showAddImageButton: false,
    bookImage: null,
    bookName: null,
    bookAuthor: null,
    bookGenre: null,
    bookPrice: null,
    bookInfo: null,
    communityName: null,
    bookID: null,
    bookImageURL: null,
    uploadedImage: null,
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
  async handleEditBook() {
    await this.CheckEmpty();
    if (this.state.hasEmpty === false) {
      EditBookData(
        this.state.communityName,
        this.state.bookID,
        this.state.bookName,
        this.state.bookGenre,
        this.state.bookAuthor,
        this.state.bookInfo,
        this.state.bookPrice
      ).then(() => {
        console.log("edited successfully");
        if (this.state.uploadedImage === true) {
          // window.alert("sending image too");
          this.handleImageUpload(this.state.bookID).then(() => {
            window.location.replace(
              "/community/" +
                this.state.communityName +
                "/ShowBook/" +
                this.state.bookID
            );
          });
        } else {
          window.location.replace(
            "/community/" +
              this.state.communityName +
              "/ShowBook/" +
              this.state.bookID
          );
        }
      });
    }
  }

  async componentDidMount() {
    var splitted = decodeURIComponent(window.location.toString()).split("/");
    await this.setState({ bookID: splitted.pop() });
    splitted.pop();
    await this.setState({ communityName: splitted.pop() });
    console.log(this.state.bookID);
    console.log(this.state.communityName);
    await LoadBookData(this.state.bookID).then((b) => {
      this.setState({ bookName: b.book.name });
      this.setState({ bookAuthor: b.book.author });
      this.setState({ bookGenre: b.book.genre });
      this.setState({ bookInfo: b.book.description });
      this.setState({ bookPrice: b.book.price });
      this.setState({ bookImageURL: b.book.image });
    });
    console.log(this.state.bookImageURL);
  }
  HandleFileSelect = (e) => {
    if (e.target.files.length === 0) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.background.style.backgroundImage = `url(${fileReader.result})`;
    };
    fileReader.readAsDataURL(e.target.files[0]);
    this.setState({ bookImage: e.target.files[0] });
    this.setState({ uploadedImage: true });
    this.setState({ bookImageURL: null });
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
              <Grid item xs={12} lg={4} md={4}>
                <div
                  style={{
                    borderRadius: "15%",
                    backgroundColor: "gray",
                    width: "80%",
                    paddingTop: "80%",
                    margin: "auto",
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundImage: `url(${
                      references.url_address + this.state.bookImageURL
                    })`,
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
                </div>
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
                      value={this.state.bookName}
                      inputProps={{
                        textAlign: "right",
                        fontFamily: "BYekan",
                      }}
                      InputLabelProps={{ shrink: true }}
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
                      value={this.state.bookAuthor}
                      inputProps={{
                        textAlign: "right",
                        fontFamily: "BYekan",
                      }}
                      InputLabelProps={{ shrink: true }}
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
                      value={this.state.bookGenre}
                      inputProps={{
                        textAlign: "right",
                        fontFamily: "BYekan",
                      }}
                      InputLabelProps={{ shrink: true }}
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
                      value={this.state.bookPrice}
                      inputProps={{
                        textAlign: "right",
                        fontFamily: "BYekan",
                      }}
                      InputLabelProps={{ shrink: true }}
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
                  value={this.state.bookInfo}
                  inputProps={{
                    textAlign: "right",
                    fontFamily: "BYekan",
                  }}
                  InputLabelProps={{ shrink: true }}
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
                  onClick={() => this.handleEditBook()}
                >
                  ویرایش کتاب
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </ThemeProvider>
    );
  }
}

export default EditBook;
