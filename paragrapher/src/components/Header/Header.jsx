import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as UiLink } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { BrowserView, MobileView } from "react-device-detect";
import { useHistory } from "react-router-dom";
import { cookie } from "../../Utils/Common";
import Fade from "@material-ui/core/Fade";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import references from "../../assets/References.json";
import {
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import PopupAccountBox from "../AccountBox/PopupAccountBox";
import { ThemeProvider } from "@material-ui/styles";
import { Menu } from "@material-ui/core";
import { theme } from "../theme";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "../theme";
import InputBase from "@material-ui/core/InputBase";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Hidden } from "@material-ui/core";
import { GetHeaderProfile, Logout } from "../../Utils/Connection.js";
import { GetCredit } from "../../Utils/Connection.js";
import Search from "../Search/Search";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
function Header(props) {
  const [drawerAnchor, setDrawerAnchor] = useState(false);
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const classes = useStyles(theme);
  const [isLoggedIn, setLoggedIn] = useState(props.isLoggedIn);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const handleLogout = () => {
    Logout();
    setAnchorEl(null);
    // send some data to backend to remove cookie
    window.location.replace("/");
  };
  function goToBuyCredits() {
    window.location.replace("/BuyCredits");
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <AppBar
          position="static"
          color="primary"
          //style={{ backgroundColor: "#40a9b3" }}
        >
          <Toolbar style={{ display: "inline-flex" }}>
            <Hidden mdUp>
              <IconButton
                onClick={() => setDrawerAnchor(true)}
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerAnchor}
                onClose={() => setDrawerAnchor(false)}
              >
                <List>
                  {isLoggedIn ? (
                    <div>
                      <ListItem
                        button
                        onClick={() => {
                          window.location.replace("/communities");
                        }}
                      >
                        <ListItemIcon>
                          <PeopleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="همه کامیونیتی ها" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => {
                          window.location.replace("/books");
                        }}
                      >
                        <ListItemIcon>
                          <StorefrontIcon />
                        </ListItemIcon>
                        <ListItemText primary="همه محصولات" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => {
                          window.location.replace("/BuyCredits");
                        }}
                      >
                        <ListItemIcon>
                          <MonetizationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="افزایش اعتبار" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => {
                          window.location.replace("/Cart");
                        }}
                      >
                        <ListItemIcon>
                          <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="سبد خرید" />
                      </ListItem>
                    </div>
                  ) : (
                    <div>
                      <ListItem button>
                        <ListItemIcon
                          onClick={() => {
                            setDrawerAnchor(false);
                            setAccountBoxTrigger(true);
                          }}
                        >
                          <PersonOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="ورود" />
                      </ListItem>
                    </div>
                  )}
                </List>
              </Drawer>
            </Hidden>

            <Typography
              href=""
              className={classes.typography}
              align="right"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, m: 2 }}
            >
              <Link className={classes.link} color="inherit" href="/">
                پاراگرافر
              </Link>
            </Typography>

            <div style={{ width: "32%" }}>
              <Search></Search>
            </div>

            <div className={classes.grow} />

            {isLoggedIn ? (
              <div className={classes.icons}>
                <Hidden xsDown>
                  <IconButton color="inherit" onClick={goToBuyCredits}>
                    <MonetizationOnIcon />
                  </IconButton>
                </Hidden>
                <IconButton color="inherit" disabled>
                  <Badge badgeContent={0} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Hidden xsDown>
                  <IconButton
                    onClick={() => {
                      window.location.replace("/Cart");
                    }}
                    color="inherit"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Hidden>
                <IconButton
                  edge="end"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem
                    onClick={() => {
                      window.location.replace("/profile");
                    }}
                  >
                    <AvatarCredit />
                  </MenuItem>
                  {/* <MenuItem
                    onClick={() => {
                      history.push(references.url_profile);
                    }}
                    className={classes.typography}
                  >
                    <li>
                      <Link to="/profile">حساب کاربری</Link>
                    </li>
                  </MenuItem> */}
                  <MenuItem
                    onClick={() => {
                      window.location.replace("/profile/myCommunities");
                    }}
                  >
                    کامیونیتی های من
                  </MenuItem>
                  <MenuItem
                    onClick={handleLogout}
                    className={classes.typography}
                  >
                    خروج
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Hidden xsDown>
                <Button
                  onClick={() => setAccountBoxTrigger(true)}
                  variant="contained"
                  color="secondary"
                  style={{ fontFamily: "BYekan" }}
                  className={classes.sectionDesktop}
                >
                  {/* <AccountCircle /> */}
                  ورود
                </Button>
              </Hidden>
            )}
          </Toolbar>

          <PopupAccountBox
            trigger={accountBoxTrigger}
            setTrigger={setAccountBoxTrigger}
          />
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
class AvatarCredit extends React.Component {
  state = {
    avatarImage: null,
    creditAmount: null,
    accountName: null,
    creditText: null,
  };
  componentDidMount = async () => {
    // await GetCredit().then((res) => {
    //   this.setState({
    //     creditAmount: res,
    //   });
    //   this.setState({
    //     creditText: "اعتبار:" + this.state.creditAmount + "تومان",
    //   });
    // });
    await GetHeaderProfile().then((res) => {
      this.setState({
        avatarImage: res.avatar,
        accountName: res.username,
        creditAmount: res.credit,
      });
      this.setState({
        creditText: "اعتبار: " + this.state.creditAmount + " تومان",
      });
    });
  };
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Avatar src={references.url_address + this.state.avatarImage} />
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>{this.state.accountName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{this.state.creditText}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Header;
