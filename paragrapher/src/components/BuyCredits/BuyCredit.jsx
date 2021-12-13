import React from "react";
import { Grid, TextField, ThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import money from "../../assets/money.png";
import money2 from "../../assets/money2.png";
import money3 from "../../assets/money3.png";
import { Button } from "@material-ui/core";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References";
import { Addchart } from "@mui/icons-material";

class BuyCredit extends React.Component {
  state = {
    class1: { raised: false, shadow: 1 },
    class2: { raised: false, shadow: 1 },
    class3: { raised: false, shadow: 1 },
    moneyAmount: null,
    helperText: null,
    error: false,
  };

  handleAmountChange = (event) => {
    if (!isNaN(event.target.value)) {
      this.setState({ error: false });
      this.setState({ moneyAmount: event.target.value });
      this.setState({ helperText: null });
    } else {
      this.setState({ error: true });
      this.setState({ helperText: "مقدار وارد شده عدد نیست" });
      this.setState({ moneyAmount: event.target.value });
    }
  };

  handleAddCredit1 = () => {
    this.addCredit(10500);
  };
  handleAddCredit2 = () => {
    this.addCredit(23000);
  };
  handleAddCredit3 = () => {
    this.addCredit(60000);
  };
  handleAddCredit4 = () => {
    if (this.state.moneyAmount < 1000) {
      window.alert("حداقل مقدار شارژ برابر 1000 تومان است");
    } else if (this.state.moneyAmount % 1000 !== 0) {
      window.alert("مقدار شارژ باید بر 1000 تومان بخشپذیر باشد");
    } else {
      this.addCredit(this.state.moneyAmount);
    }
  };

  addCredit = async (amount) => {
    if (!isNaN(amount)) {
      let mon = parseInt(amount);
      await axios
        .post(makeURL(references.url_add_credit), {
          amount: mon,
        })
        .then((res) => {
          console.log(res);
          window.alert("افزایش اعتبار با موفقیت انجام شد");
          window.location.replace("/profile");
        })
        .catch((res) => {
          window.alert(res);
        });
    } else window.alert("مقدار وارد شده عدد نیست");
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div style={{ padding: "5vh 5vw 5vh 5vw", width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4} md={4}>
              <Card
                style={{ borderRadius: "2%", minHeight: "80vh" }}
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
                  <div style={{ height: "30vh" }}>
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
                      style={{
                        fontSize: 25,
                        width: "15vh",
                        marginBottom: "5vh",
                      }}
                      id={10500}
                      onClick={this.handleAddCredit1}
                      disabled
                    >
                      خرید
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4} md={4}>
              <Card
                style={{ borderRadius: "2%", minHeight: "80vh" }}
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
                  <div style={{ height: "30vh" }}>
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
                      style={{
                        fontSize: 25,
                        width: "15vh",
                        marginBottom: "5vh",
                      }}
                      id={23000}
                      onClick={this.handleAddCredit2}
                      disabled
                    >
                      خرید
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4} md={4}>
              <Card
                style={{ borderRadius: "2%", minHeight: "80vh" }}
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
                <CardContent style={{ textAlign: "center" }}>
                  <Typography style={{ textAlign: "center", fontSize: 30 }}>
                    پلن سوم
                  </Typography>
                  <div style={{ height: "30vh" }}>
                    <CardMedia
                      image={money3}
                      style={{
                        width: "88%",
                        paddingTop: "50%",
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
                      style={{
                        fontSize: 25,
                        width: "15vh",
                        marginBottom: "5vh",
                      }}
                      id={60000}
                      onClick={this.handleAddCredit3}
                      disabled
                    >
                      خرید
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <Card>
                <CardContent>
                  <Typography style={{ fontSize: 25 }}>
                    شارژ مبلغ دلخواه
                  </Typography>
                  <TextField
                    error={this.state.error}
                    helperText={this.state.helperText}
                    style={{ width: "50%", paddingTop: "2vh" }}
                    variant="filled"
                    label="مبلغ به تومان"
                    onChange={this.handleAmountChange}
                    value={this.state.moneyAmount}
                  ></TextField>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{
                      float: "left",
                      marginTop: "3vh",
                      marginLeft: "3vw",
                    }}
                    id={404}
                    onClick={this.handleAddCredit4}
                    disabled
                  >
                    انجام تراکنش
                  </Button>
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
