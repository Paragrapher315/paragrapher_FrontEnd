import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserView, MobileView } from "react-device-detect";
import { cookie } from "../../Utils/Common";

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
import { cookie } from "../../Utils/Common";

function Header() {
  const [drawerAnchor, setDrawerAnchor] = useState(false);
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const classes = useStyles(theme);
  const [isLoggedIn, setLoggedIn] = useState(
    cookie.get("x-access-token") !== undefined ? true : false
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="primary"
          //style={{ backgroundColor: "#40a9b3" }}
        >
          <Toolbar style={{ display: "inline-flex" }}>
            <MobileView>
              <IconButton
                onClick={() => setDrawerAnchor(true)}
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
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
            </MobileView>
            <Typography
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
                    onClick={handleClose}
                    className={classes.typography}
                  >
                    حساب کاربری
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className={classes.typography}
                  >
                    خروج
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <BrowserView>
                <Button
                  onClick={() => setAccountBoxTrigger(true)}
                  variant="contained"
                  color="secondary"
                  className={classes.typography}
                >
                  {/* <AccountCircle /> */}
                  ورود
                </Button>
              </BrowserView>
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
