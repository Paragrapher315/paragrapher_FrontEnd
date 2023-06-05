import React from "react";
import { Link } from "react-router-dom";
import { ReserveBook } from "../../Utils/Connection";
import references from "../../assets/References.json";
import LoanOption from "../ShowBook/LoanOption";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "auto",
    marginBottom: 20,
  },
  media: {
    height: 250,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    marginTop: 10,
    color: "#f44336",
    fontWeight: "bold",
  },
});

function Book1(props) {
  const classes = useStyles();

  const {
    id,
    name,
    genre,
    author,
    price,
    modified_time,
    reserved_time,
    description,
    seller_id,
    community_id,
    community_name,
    image,
  } = props;

  const view = "/community/" + community_name + "/ShowBook/" + id;

  const handleReserveBook = () => {
    ReserveBook(id);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Box boxShadow={5}>
          <CardMedia
            className={classes.media}
            component="img"
            image={
              image
                ? image
                : "https://via.placeholder.com/250x350.png?text=Book+Cover+Not+Available"
            }
            title={name}
          />
        </Box>
        <CardContent>
          <Link to={view}>
            <Typography gutterBottom variant="h5" component="h2">
              {name} اثر {author}
            </Typography>
          </Link>
          <Typography
            className={classes.description}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {genre}
          </Typography>
          <Typography
            className={classes.price}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {price} تومان
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box display="flex" justifyContent="center">
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleReserveBook}
          >
            افزودن به سبد خرید
          </Button>
          <Hidden smDown>
            <LoanOption book_id={id} />
          </Hidden>
        </CardActions>
      </Box>
    </Card>
  );
}

export default Book1;
