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
    isAdmin: false,
    membersList: [],
  };
  componentDidMount = async () => {
    console.log("communityName is : ", this.props.communityName);
    this.setState({ isAdmin: this.props.isAdmin });
    this.setState({ communityName: this.props.communityName });
    this.setState({ membersList: this.props.membersList });
    console.log("***** admin state *****", this.props.isAdmin); // don't remove this line (you might think it's funny but the project won't work without this, puff)
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Grid container spacing={2} style={{ padding: "2vh 1vw" }}>
            {this.state.membersList.length >= 1 &&
              this.state.membersList.map((member) => {
                return (
                  <Grid item lg={4} md={6} xs={12}>
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar src={references.url_address + member.avatar}>
                            <Typography>{member.username[0]}</Typography>
                          </Avatar>
                        }
                        action={
                          <div>
                            <Button
                              style={{ marginTop: "1.4vh" }}
                              onClick={() => {
                                window.location.replace(
                                  "/community/" +
                                    this.state.communityName +
                                    "/members/" +
                                    member.username
                                ); // might need a change in the address
                              }}
                            >
                              پروفایل
                            </Button>
                            {this.state.isAdmin && (
                              <Button disabled style={{ marginTop: "1.4vh" }}>
                                حذف
                              </Button>
                            )}
                          </div>
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
