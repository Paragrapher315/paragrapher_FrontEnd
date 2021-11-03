import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserView, MobileView } from "react-device-detect";
import {
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import PopupAccountBox from "../AccountBox/PopupAccountBox";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/material";
import { StylesProvider } from "@mui/styles";
function Header() {
  const [drawerAnchor, setDrawerAnchor] = useState(false);
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const theme = (mode) =>
    createTheme({
      pallete: {
        primary: {
          main: "#c91313",
        },
        secondary: {
          main: "#F5BD1F",
          contrastText: "#3ace34 ",
        },
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            color="default"
            style={{ backgroundColor: "#40a9b3" }}
          >
            <Toolbar>
              <MobileView>
                <IconButton
                  onClick={() => setDrawerAnchor(true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
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
                    {["Inbox", "Starred", "Send email", "Drafts"].map(
                      (text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon
                            onClick={() => {
                              setDrawerAnchor(false);
                              setAccountBoxTrigger(true);
                            }}
                          >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Drawer>
              </MobileView>
              <Typography
                align="right"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, m: 2 }}
              >
                پاراگرافر
              </Typography>
              <BrowserView>
                <Button
                  onClick={() => setAccountBoxTrigger(true)}
                  color="inherit"
                  variant="outlined"
                >
                  ورود
                </Button>
              </BrowserView>
            </Toolbar>

            <PopupAccountBox
              trigger={accountBoxTrigger}
              setTrigger={setAccountBoxTrigger}
            />
          </AppBar>
        </Box>
      </StylesProvider>
    </ThemeProvider>
  );
}
export default Header;
