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
    bookName: null,
    bookAuthor: null,
    bookGenre: null,
    bookPrice: null,
    bookInfo: null,
    communityName: null,
  };
  async componentDidMount() {
    var splitted = window.location.toString().split("/");
    await this.setState({ communityName: splitted.pop() });
    console.log(this.state.communityName);
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
  };
  handleImageUpload = (bookID) => {
    const data = new FormData();
    data.append("file", this.state.bookImage);
    AddBookPic(this.state.communityName, bookID, data);
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ float: "left" }}
                  onClick={() =>
                    AddBookToShop(
                      this.state.communityName,
                      this.state.bookName,
                      this.state.bookGenre,
                      this.state.bookAuthor,
                      this.state.bookInfo,
                      this.state.bookPrice
                    ).then((res) => {
                      // console.log(res);
                      this.handleImageUpload(res);
                    })
                  }
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
