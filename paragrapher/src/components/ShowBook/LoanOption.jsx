import React, { useState } from "react";
import { setBookLoan } from "../../Utils/Connection";
import {
  Button,
  Typography,
  TextField,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Draggable from "react-draggable";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: "#fff",
    background: "#c0a16b",
    fontWeight: "bold",
    textTransform: "none",
    "&:hover": {
      background: "#a18a54",
    },
  },
  buttonLarge: {
    width: "150px",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(1),
    justifyContent: "flex-end",
    display: "flex",
  },
  textField: {
    margin: theme.spacing(1),
  },
  card: {
    margin: theme.spacing(1),
    backgroundColor: "#fff",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
    overflow: "hidden",
    position: "absolute",
    zIndex: "9999",
    cursor: "move",
  },
  cardHeader: {
    backgroundColor: "#c0a16b",
    color: "#fff",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardCloseButton: {
    color: "#fff",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "#a18a54",
    },
  },
  cardContent: {
    padding: theme.spacing(2),
  },
}));

function LoanOption({ book_id }) {
  const classes = useStyles();

  const [showContent, setShowContent] = useState(false);
  const [daysValue, setDaysValue] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const sendLoanValue = (id, day_count) => {
    setBookLoan(id, day_count);
  };

  const handleButtonClick = () => {
    setShowContent(true);
  };

  const handleDaysInputChange = (event) => {
    setDaysValue(parseInt(event.target.value, 10));
  };

  const handleCalculateClick = (event) => {
    event.preventDefault();
    const cost = daysValue * 500;
    setTotalCost(cost);
  };

  const handleLoanSubmit = (event) => {
    event.preventDefault();
    sendLoanValue(book_id, daysValue);
  };

  const handleCancelClick = () => {
    setShowContent(false);
    setDaysValue(0);
    setTotalCost(0);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<ShoppingCartIcon />}
        onClick={handleButtonClick}
      >
        قرض کتاب
      </Button>
      {showContent && (
        <Draggable>
          <Card className={classes.card}>
            <Box className={classes.cardHeader}>
              <Typography variant="subtitle1" className={classes.cardTitle}>
                قرض کتاب
              </Typography>
              <Button
                className={classes.cardCloseButton}
                onClick={handleCancelClick}
              >
                بستن
              </Button>
            </Box>
            <CardContent className={classes.cardContent}>
              <Box className={classes.container}>
                <Typography variant="subtitle1">
                  لطفا تعداد روز را مشخص نمایید. (هزینه هر روز قرض برابر 500
                  تومان میباشد)
                </Typography>
                <TextField
                  id="days-input"
                  label="تعداد روز"
                  type="number"
                  value={daysValue}
                  onChange={handleDaysInputChange}
                  variant="outlined"
                  margin="normal"
                  className={classes.textField}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={`${classes.button} ${classes.buttonLarge}`}
                  onClick={handleCalculateClick}
                >
                  محاسبه قیمت{" "}
                </Button>
                {totalCost > 0 && (
                  <Typography variant="subtitle1">
                    قیمت: {totalCost} تومان
                  </Typography>
                )}
                <Button
                  size="large"
                  className={`${classes.button} ${classes.buttonLarge}`}
                  onClick={handleLoanSubmit}
                >
                  قرض گرفتن
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Draggable>
      )}
    </Box>
  );
}

export default LoanOption;
