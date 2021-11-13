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
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { useHistory } from "react-router-dom";
import { cookie } from "../../Utils/Common";
import references from "../../assets/References.json";
import {
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import { Logout } from "../../Utils/Connection.js";

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
    window.location.reload();
  };

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
                    <div></div>
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
              پاراگرافر
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="جستجو"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>

            <div className={classes.grow} />

            {isLoggedIn ? (
              <div className={classes.icons}>
                <IconButton color="inherit">
                  <Badge badgeContent={1} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
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
                >
                  <MenuItem
                    onClick={() => {
                      history.push(references.url_profile);
                    }}
                    className={classes.typography}
                  >
                    حساب کاربری
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
export default Header;
