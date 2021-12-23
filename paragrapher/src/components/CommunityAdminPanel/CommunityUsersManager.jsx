import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { Button, Grid, ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { CheckAdmin, GetCommunityMembersList } from "../../Utils/Connection";
import { theme } from "../theme";
import references from "../../assets/References.json";
class CommunityUserManager extends React.Component {
  state = {
    communityName: null,
    membersList: [],
  };
  componentDidMount = async () => {
    console.log("communityName is : ", this.props.communityName);
    this.setState({ communityName: this.props.communityName });
    await GetCommunityMembersList(this.props.communityName).then((mems) => {
      this.setState({ membersList: mems });
    });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Grid container spacing={2} style={{ padding: "2vh 1vw" }}>
            {this.state.membersList.map((member) => {
              return (
                <Grid item lg={3} md={6} xs={12}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar src={references.url_address + member.avatar}>
                          <Typography>{member.username[0]}</Typography>
                        </Avatar>
                      }
                      action={
                        <Button disabled style={{ marginTop: "1.4vh" }}>
                          حذف
                        </Button>
                      }
                      title={
                        <Typography style={{ marginRight: "0.6vw" }}>
                          {member.username}
                        </Typography>
                      }
                    />
                    {/* <CardContent>"salam"</CardContent> */}
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default CommunityUserManager;
