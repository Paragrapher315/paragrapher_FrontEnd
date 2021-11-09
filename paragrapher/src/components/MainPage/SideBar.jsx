import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
function SideBar() {
  return (
    <>
      <List>
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
    </>
  );
}

export default SideBar;
