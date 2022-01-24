/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import rtl from "jss-rtl";
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
} from "@material-ui/core";
import { theme } from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import { jssPreset } from "@material-ui/styles";
import { menuItemClasses } from "@mui/material";
import Button from "@material-ui/core/Button";
import {
  CreateParagraph,
  EditParagraph,
  GetParagraph,
} from "../../Utils/Connection";
import Chip from "@material-ui/core/Chip";
import { useParams } from "react-router";
import { withRouter } from "react-router";
import references from "../../assets/References.json";
import { getUser, makeURL } from "../../Utils/Common";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
class ProfileEditor extends React.Component {
  state = {
    isShown: true,
    comIsVisible: false,
    communityName: "",
    author: "",
    book: "",
    paragraph: "",
    tag: "",
    tags: [],
    error: false,
    helperText: "",
    p_id: "",
    tagOptions: [],
    bookOptions: [],
    authorOptions: [],
  };
  async componentDidMount() {
    // console.log(this.props.match.params);
    // this.props.history.
    // console.log("this is a mother fucker", window.location.toString());

    var splitted = decodeURIComponent(window.location.toString()).split("/");
    if (splitted[splitted.length - 1] === "") {
      splitted.pop();
    }
    await this.setState({ p_id: splitted.pop() });
    await this.setState({ communityName: splitted.pop() });

    // if (this.props.p_id) {
    //   this.setState({ p_id: this.props.p_id });
    // }
    // if (this.props.book) {
    //   this.setState({ book: this.props.book });
    // }
    // if (this.props.author) {
    //   this.setState({ author: this.props.author });
    // }
    // if (this.props.paragraph) {
    //   this.setState({ paragraph: this.props.paragraph });
    // }
    // if (this.props.tags) {
    //   this.setState({ tags: this.props.tags });
    // }
    // if (this.props.community) {
    //   this.setState({ community: this.props.community });
    //   this.setState({ comIsVisible: false });
    // }
    // if (this.props.isShown) {
    //   this.setState({ isShown: this.props.isShown });
    // }
    this.loadData(this.state.communityName, this.state.p_id.toString());
  }
  loadData = async (communityName, p_id) => {
    await axios
      .patch(
        makeURL(
          references.url_create_paragraph + "/" + communityName + "/paragraph"
        ),
        {
          p_id: p_id,
        }
      )
      .then((response) => {
        this.setState({ communityName: response.data.community_name });
        this.setState({ author: response.data.author });
        this.setState({ book: response.data.ref_book });
        this.setState({ tags: response.data.tags.split(",") });
        this.setState({ paragraph: response.data.p_text });
        if (this.state.author == getUser()) {
          this.setState({ isShown: false });
        }
        if (this.state.tags[0] === "") {
          let newArr = this.state.tags;
          newArr.splice(0, 1);
          this.setState({ tags: newArr });
        }
      })
      .catch((error) => {
        window.alert(error);
        window.history.back();
      });
  };
  handleCommunity = (event) => {
    this.setState({ communityName: event.target.value });
  };
  handleCreateParagraph = () => {
    EditParagraph(
      this.state.communityName,
      this.state.author,
      this.state.book,
      this.state.paragraph,
      this.state.tags.toString(),
      this.state.p_id
    );
  };
  handleCreateTag = () => {
    if (this.state.tags.includes(this.state.tag)) {
      this.setState({ error: true });
      this.setState({ helperText: "تگ تکراری می باشد!" });
    } else if (this.state.tag === "") {
      this.setState({ error: true });
      this.setState({ helperText: "تگ خالی می باشد!" });
    } else {
      this.state.tags.push(this.state.tag);
      this.setState({ tag: "" });
    }
  };
  handleDelete = (label) => (event) => {
    const index = this.state.tags.indexOf(label);
    if (index > -1) {
      this.state.tags.splice(index, 1);
    }
    this.setState({ tags: this.state.tags });
  };
  handleParagraphChange = (e) => {
    this.setState({ paragraph: e.target.value });
  };
  handleBookChange = async (event, value) => {
    this.setState({ book: value });
    await axios
      .put(makeURL(references.url_suggestion + value + "&type=book"))
      .then((res) => {
        Array.isArray(res.data.res) &&
          this.setState({
            bookOptions: res.data.res.filter(this.onlyUnique),
          });
      });
  };
  handleAuthorChange = async (event, value) => {
    this.setState({ author: value });
    await axios
      .put(makeURL(references.url_suggestion + value + "&type=author"))
      .then((res) => {
        Array.isArray(res.data.res) &&
          this.setState({
            authorOptions: res.data.res.filter(this.onlyUnique),
          });
      });
  };
  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  handleTagChange = async (event, value) => {
    this.setState({ error: false });
    this.setState({ helperText: "" });
    this.setState({ tag: value });
    await axios
      .put(makeURL(references.url_suggestion + value + "&type=tag"))
      .then((res) => {
        Array.isArray(res.data.res) &&
          this.setState({
            tagOptions: res.data.res.filter(this.onlyUnique),
          });
      });
  };
  render() {
    return (
      <div
        className={this.props.classes.paragraphDiv}
        style={{ minHeight: "86.3vh" }}
      >
        <ThemeProvider theme={theme}>
          <Card style={{ padding: "4vh 4vh" }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      lg={4}
                      md={4}
                      xs={12}
                      style={{ marginBottom: "2vh" }}
                    >
                      <Typography>
                        کامیونیتی : {this.state.communityName}
                      </Typography>

                      {/* <FormControl disabled style={{ width: "100%" }}>
                        <InputLabel id="community-name">کامیونیتی</InputLabel>
                        <Select
                          id="community-name"
                          onChange={this.handleCommunity}
                          value={this.state.communityName ?? ""}
                        >
                          <MenuItem value="اول">اول</MenuItem>
                          <MenuItem value="دوم">دوم</MenuItem>
                          <MenuItem value="سوم">سوم</MenuItem>
                        </Select>
                      </FormControl> */}
                    </Grid>
                    <Grid item lg={8} md={8} xs={0} />
                    <Grid item lg={3} md={3} xs={12}>
                      <Typography>نوع پاراگراف: </Typography>
                    </Grid>
                    <Grid item lg={5} md={5} xs={12}>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          lg={3}
                          md={3}
                          xs={3}
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <Typography>کتابی</Typography>
                        </Grid>
                        <Grid
                          item
                          lg={3}
                          md={3}
                          xs={3}
                          style={{ textAlign: "center" }}
                        >
                          <Switch
                            onChange={() => {
                              this.setState({ isShown: !this.state.isShown });
                              this.setState({ book: "" });
                              this.setState({ author: "" });
                            }}
                            checked={this.state.isShown}
                          />
                        </Grid>
                        <Grid
                          item
                          lg={3}
                          md={3}
                          xs={3}
                          style={{ textAlign: "center" }}
                        >
                          <Typography style={{ top: "50%" }}>شخصی</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {this.state.isShown ? (
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item lg={6} md={6} xs={12}>
                        <Autocomplete
                          options={this.state.bookOptions}
                          value={this.state.book}
                          onInputChange={this.handleBookChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="filled"
                              label="نام کتاب"
                              // onChange={this.handleAuthorChange}
                              // value={this.state.author}
                              // name={params.inputProps.value}
                              style={{ width: "100%" }}
                              // InputLabelProps={{
                              //   classes: {
                              //     root: this.props.classes.labelRoot,
                              //     shrink: this.props.classes.shrink,
                              //   },
                              // }}
                              // onClick={console.log(params)}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item lg={6} md={6} xs={12}>
                        <Autocomplete
                          options={this.state.authorOptions}
                          value={this.state.author}
                          onInputChange={this.handleAuthorChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="filled"
                              label="نام نویسنده"
                              // onChange={this.handleAuthorChange}
                              // value={this.state.author}
                              // name={params.inputProps.value}
                              style={{ width: "100%" }}
                              // InputLabelProps={{
                              //   classes: {
                              //     root: this.props.classes.labelRoot,
                              //     shrink: this.props.classes.shrink,
                              //   },
                              // }}
                              // onClick={console.log(params)}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                ) : (
                  ""
                )}
                <Grid item xs={12}>
                  <TextField
                    label="متن پاراگراف"
                    multiline
                    minRows={4}
                    style={{ width: "100%" }}
                    onChange={this.handleParagraphChange}
                    value={this.state.paragraph}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Autocomplete
                    options={this.state.tagOptions}
                    value={this.state.tag}
                    onInputChange={this.handleTagChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="filled"
                        error={this.state.error}
                        label="تگ"
                        helperText={this.state.helperText}
                        style={{ width: "100%" }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      maxWidth: "100%",
                    }}
                    color="primary"
                    onClick={this.handleCreateTag}
                  >
                    افزودن تگ
                  </Button>
                </Grid>
                <Grid item lg={6} xs={12}>
                  {Array.isArray(this.state.tags)
                    ? this.state.tags.map((e) => {
                        return (
                          <Chip
                            variant="default"
                            className={this.props.classes.typography}
                            color="secondary"
                            style={{ margin: "0.3rem 0.2rem 0 0" }}
                            size="small"
                            label={e}
                            onDelete={this.handleDelete(e)}
                            key={e}
                          />
                        );
                      })
                    : ""}
                </Grid>
                <Grid item xs={0} lg={5}></Grid>
                <Grid item xs={0} lg={5}></Grid>
                <Grid item xs={12} lg={2} style={{ padding: "2vh 2vh" }}>
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      minWidth: "100%",
                    }}
                    color="secondary"
                    onClick={this.handleCreateParagraph}
                  >
                    ثبت
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </ThemeProvider>
      </div>
    );
  }
}

export default ProfileEditor;
