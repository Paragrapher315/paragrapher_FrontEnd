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
  GetCommunities,
} from "../../Utils/Connection.js";
import Chip from "@material-ui/core/Chip";
import { useParams } from "react-router";
import { withRouter } from "react-router";
import references from "../../assets/References.json";
import { getUser, makeURL } from "../../Utils/Common";
import axios from "axios";
class ProfileEditor extends React.Component {
  state = {
    isShown: false,
    comIsVisible: true,
    community: "",
    author: "",
    book: "",
    paragraph: "",
    tag: "",
    tags: [],
    error: false,
    helperText: "",
    communityNames: [],
  };
  componentDidMount() {
    // console.log(this.props.match.params);
    // this.props.history.
    // console.log("this is a mother fucker", window.location.toString());
    GetCommunities().then((data) => {
      data.data.forEach((element) => {
        this.state.communityNames.push(element.name);
      });
      this.setState({ communityNames: this.state.communityNames });
    });
  }
  handleCommunity = (event) => {
    this.setState({ community: event.target.value });
  };
  handleCreateParagraph = () => {
    if (this.state.author == "") this.setState({ author: getUser() });
    CreateParagraph(
      this.state.community,
      this.state.author,
      this.state.book,
      this.state.paragraph,
      this.state.tags.toString()
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
  handleBookChange = (e) => {
    this.setState({ book: e.target.value });
  };
  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value });
  };
  handleTagChange = (e) => {
    this.setState({ tag: e.target.value });
    this.setState({ error: false });
    this.setState({ helperText: "" });
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
                    {this.state.comIsVisible ? (
                      <Grid
                        item
                        lg={4}
                        md={4}
                        xs={12}
                        style={{ marginBottom: "2vh" }}
                      >
                        <FormControl style={{ width: "100%" }}>
                          <InputLabel id="community-name">کامیونیتی</InputLabel>

                          <Select
                            id="community-name"
                            onChange={this.handleCommunity}
                            value={this.state.community ?? ""}
                          >
                            {this.state.communityNames.map((e) => {
                              return <MenuItem value={e}>{e}</MenuItem>;
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                    ) : (
                      <Grid
                        item
                        lg={4}
                        md={4}
                        xs={12}
                        style={{ marginBottom: "2vh" }}
                      ></Grid>
                    )}
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
                          <Typography>شخصی</Typography>
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
                            value={!this.state.isShown}
                          />
                        </Grid>
                        <Grid
                          item
                          lg={3}
                          md={3}
                          xs={3}
                          style={{ textAlign: "center" }}
                        >
                          <Typography style={{ top: "50%" }}>کتابی</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {this.state.isShown && (
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item lg={6} md={6} xs={12}>
                        <TextField
                          variant="filled"
                          label="نام کتاب"
                          style={{
                            direction: "rtl",
                            textAlign: "right",
                            width: "100%",
                          }}
                          onChange={this.handleBookChange}
                          value={this.state.book}
                          inputProps={{
                            textAlign: "right",
                            fontFamily: "BYekan",
                          }}

                          // InputLabelProps={{
                          //   classes: {
                          //     root: this.props.classes.labelRoot,
                          //     shrink: this.props.classes.shrink,
                          //   },
                          // }}
                        />
                      </Grid>
                      <Grid item lg={6} md={6} xs={12}>
                        <TextField
                          variant="filled"
                          label="نام نویسنده"
                          value={this.state.author}
                          onChange={this.handleAuthorChange}
                          style={{ width: "100%" }}
                          // InputLabelProps={{
                          //   classes: {
                          //     root: this.props.classes.labelRoot,
                          //     shrink: this.props.classes.shrink,
                          //   },
                          // }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
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
                  <TextField
                    error={this.state.error}
                    label="تگ"
                    value={this.state.tag}
                    onChange={this.handleTagChange}
                    variant="filled"
                    helperText={this.state.helperText}
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
