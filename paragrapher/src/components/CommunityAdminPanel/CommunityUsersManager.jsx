import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { CheckAdmin } from "../../Utils/Connection";
class CommunityUserManager extends React.Component {
  state = {
    isAdmin: true,
    communityName: null,
    membersList: [],
  };
  componentDidMount() {
    console.log("communityName is : ", this.props.communityName);
    this.setState({ communityName: this.props.communityName });
    CheckAdmin(this.props.communityName).then();
    // Check if user is admin
    // Get Communtiy Mambers list
  }
  render() {
    return (
      <div>
        {this.state.isAdmin ? (
          <div>
            <Card>
              <CardHeader
                avatar={<Avatar>ک</Avatar>}
                action={<Button style={{ marginTop: "1.4vh" }}>حذف</Button>}
                title={
                  <Typography style={{ marginRight: "0.6vw" }}>
                    اسم فرد
                  </Typography>
                }
              />
              {/* <CardContent>"salam"</CardContent> */}
            </Card>
          </div>
        ) : (
          <div>You are not admin</div>
        )}
      </div>
    );
  }
}

export default CommunityUserManager;
