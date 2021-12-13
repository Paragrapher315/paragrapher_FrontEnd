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
import Autocomplete from "@material-ui/lab/Autocomplete";
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
    authorOptions: [],
    bookOptions: [],
    tagOptions: [],
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
    if (this.state.community === "") {
      window.alert("اجتماع انتخاب نشده");
    } else if (this.state.paragraph === "") {
      window.alert(" متن پاراگراف خالی است");
    } else {
      if (this.state.author == "") this.setState({ author: getUser() });
      CreateParagraph(
        this.state.community,
        this.state.author,
        this.state.book,
        this.state.paragraph,
        this.state.tags.toString()
      );
    }
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
                        {/* <TextField
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
                        /> */}
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

                  {/* <TextField
                    error={this.state.error}
                    label="تگ"
                    value={this.state.tag}
                    onChange={this.handleTagChange}
                    variant="filled"
                    helperText={this.state.helperText}
                  /> */}
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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

export default ProfileEditor;
