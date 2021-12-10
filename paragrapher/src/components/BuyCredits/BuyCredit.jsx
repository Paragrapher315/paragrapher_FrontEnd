import React, { Component } from "react";
import { Grid, ThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Typography } from "@material-ui/core";
import money from "../../assets/money.png";
import money2 from "../../assets/money2.png";
import money3 from "../../assets/money3.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Button } from "@material-ui/core";

class BuyCredit extends React.Component {
  state = {
    class1: { raised: false, shadow: 1 },
    class2: { raised: false, shadow: 1 },
    class3: { raised: false, shadow: 1 },
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div style={{ padding: "5vh 5vw 5vh 5vw", width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4} md={4}>
              <Card
                style={{ borderRadius: "2%", height: "75vh" }}
                className={this.props.classes.cardNotHovered}
                classes={{
                  root: this.state.class1.raised
                    ? this.props.classes.cardHovered
                    : "",
                }}
                onMouseOver={() =>
                  this.setState({ class1: { raised: true, shadow: 3 } })
                }
                onMouseOut={() =>
                  this.setState({ class1: { raised: false, shadow: 1 } })
                }
                raised={this.state.class1.raised}
                zdepth={this.state.class1.shadow}
              >
                <CardContent style={{ textAlign: "center" }}>
                  <Typography style={{ textAlign: "center", fontSize: 30 }}>
                    پلن اول
                  </Typography>
                  <div style={{ height: "15vh" }}>
                    <CardMedia
                      image={money}
                      style={{
                        width: "50%",
                        paddingTop: "30%",
                        margin: "auto",
                        marginTop: "3vh",
                      }}
                    />
                  </div>

                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      paddingTop: "5vh",
                    }}
                  >
                    <span style={{ padding: "0 1vw 0 0vw", fontSize: 80 }}>
                      {" "}
                      10000{" "}
                    </span>
                    {/* <ArrowRightAltIcon style={{ fontSize: 45 }} /> */}
                    تومان
                  </Typography>

                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      paddingTop: "5vh",
                    }}
                  >
                    با پرداخت تنها
                    <span style={{ color: "#DDA15E" }}> 10000 </span>
                    تومان
                  </Typography>
                  <Typography style={{ textAlign: "center", fontSize: 20 }}>
                    حساب خود را
                    <span style={{ color: "#DDA15E" }}> 10500 </span>
                    تومان شارژ کنید
                  </Typography>
                  <div style={{ textAlign: "center", paddingTop: "5vh" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ fontSize: 25, width: "15vh" }}
                    >
                      خرید
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4} md={4}>
              <Card
                style={{ borderRadius: "2%", height: "75vh" }}
                className={this.props.classes.cardNotHovered}
                classes={{
                  root: this.state.class2.raised
                    ? this.props.classes.cardHovered
                    : "",
                }}
                onMouseOver={() =>
                  this.setState({ class2: { raised: true, shadow: 3 } })
                }
                onMouseOut={() =>
                  this.setState({ class2: { raised: false, shadow: 1 } })
                }
                raised={this.state.class2.raised}
                zdepth={this.state.class2.shadow}
              >
                <CardContent>
                  <Typography style={{ textAlign: "center", fontSize: 30 }}>
                    پلن دوم
                  </Typography>
                  <div style={{ height: "15vh" }}>
                    <CardMedia
                      image={money2}
                      style={{
                        width: "70%",
                        paddingTop: "35%",
                        margin: "auto",
                        marginTop: "3vh",
                      }}
                    />
                  </div>
                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      paddingTop: "5vh",
                    }}
                  >
                    <span style={{ padding: "0 1vw 0 0vw", fontSize: 80 }}>
                      {" "}
                      20000{" "}
                    </span>
                    {/* <ArrowRightAltIcon style={{ fontSize: 45 }} /> */}
                    تومان
                  </Typography>

                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      paddingTop: "5vh",
                    }}
                  >
                    با پرداخت تنها
                    <span style={{ color: "#DDA15E" }}> 20000 </span>
                    تومان
                  </Typography>
                  <Typography style={{ textAlign: "center", fontSize: 20 }}>
                    حساب خود را
                    <span style={{ color: "#DDA15E" }}> 23000 </span>
                    تومان شارژ کنید
                  </Typography>
                  <div style={{ textAlign: "center", paddingTop: "5vh" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ fontSize: 25, width: "15vh" }}
                    >
                      خرید
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4} md={4}>
              <Card
                style={{ borderRadius: "2%", height: "75vh" }}
                className={this.props.classes.cardNotHovered}
                classes={{
                  root: this.state.class3.raised
                    ? this.props.classes.cardHovered
                    : "",
                }}
                onMouseOver={() =>
                  this.setState({ class3: { raised: true, shadow: 3 } })
                }
                onMouseOut={() =>
                  this.setState({ class3: { raised: false, shadow: 1 } })
                }
                raised={this.state.class3.raised}
                zdepth={this.state.class3.shadow}
              >
                <CardContent>
                  <Typography style={{ textAlign: "center", fontSize: 30 }}>
                    پلن سوم
                  </Typography>
                  <div style={{ height: "15vh" }}>
                    <CardMedia
                      image={money3}
                      style={{
                        width: "70%",
                        paddingTop: "40%",

                        margin: "auto",
                        marginTop: "2vh",
                      }}
                    />
                  </div>
                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      paddingTop: "5vh",
                    }}
                  >
                    <span style={{ padding: "0 1vw 0 1vw", fontSize: 80 }}>
                      {" "}
                      50000{" "}
                    </span>
                    {/* <ArrowRightAltIcon style={{ fontSize: 45 }} /> */}
                    تومان
                  </Typography>

                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: 25,
                      paddingTop: "5vh",
                    }}
                  >
                    با پرداخت تنها
                    <span style={{ color: "#DDA15E" }}> 50000 </span>
                    تومان
                  </Typography>
                  <Typography style={{ textAlign: "center", fontSize: 20 }}>
                    حساب خود را
                    <span style={{ color: "#DDA15E" }}> 60000 </span>
                    تومان شارژ کنید
                  </Typography>
                  <div style={{ textAlign: "center", paddingTop: "5vh" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ fontSize: 25, width: "15vh" }}
                    >
                      خرید
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default BuyCredit;
