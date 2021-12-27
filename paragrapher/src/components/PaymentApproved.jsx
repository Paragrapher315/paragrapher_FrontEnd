import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import CardImage from "../assets/credit-card.png";
import { GetHeaderProfile } from "../Utils/Connection";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
class PaymentApproved extends React.Component {
  state = {
    balance: 0,
  };
  async componentDidMount() {
    GetHeaderProfile().then((res) => {
      this.setState({ balance: res.credit });
    });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ textAlign: "center", paddingTop: "5vh" }}>
          <Card style={{ display: "inline-block" }}>
            <CardContent>
              <Grid container style={{ textAlign: "center" }}>
                <Grid item xs={12}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={CardImage}
                      alt="Card Image"
                      style={{ width: "calc(10vw + 15vh)" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography style={{ fontSize: "8vh", textAlign: "center" }}>
                    پرداخت شما موفقیت آمیز بود
                  </Typography>
                  <Typography style={{ fontSize: "5vh", textAlign: "center" }}>
                    موجودی حساب شما: {this.state.balance}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </ThemeProvider>
    );
  }
}

export default PaymentApproved;
