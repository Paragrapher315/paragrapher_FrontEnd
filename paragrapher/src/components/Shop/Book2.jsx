import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReserveBook } from "../../Utils/Connection";
import references from "../../assets/References.json";
import LoanOption from "../ShowBook/LoanOption";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NewReleasesIcon from "@material-ui/icons/NewReleases";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    margin: "0 auto",
    display: "block",
    marginTop: theme.spacing(2),
    backgroundColor: "#4caf50",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "none",
    background: "linear-gradient(to right, #4caf50, #6fbf73)",
    "&:hover": {
      background: "linear-gradient(to right, #388e3c, #4caf50)",
    },
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: theme.spacing(1),
    background: "#388e3c",
    padding: theme.spacing(1),
  },
  description: {
    fontFamily: "'Open Sans', sans-serif",
    color: "#666",
    marginBottom: theme.spacing(2),
  },
}));

function Book2(props) {
  const classes = useStyles();

  const [image, setImage] = useState(
    props.image ? references.url_address + props.image : null
  );

  const handleImageError = () => {
    setImage(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4jN6kIAxYjwJYFdZfE3QPHnINMXm5EjExQ&usqp=CAU"
    );
  };

  useEffect(() => {
    if (props.image === null) {
      setImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4jN6kIAxYjwJYFdZfE3QPHnINMXm5EjExQ&usqp=CAU"
      );
    } else {
      setImage(references.url_address + props.image);
    }
  }, [props.image]);

  const handleReserveClick = () => {
    ReserveBook(props.id);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`${props.name} اثر ${props.author}`}
        className={classes.title}
        action={
          <IconButton aria-label="new release icon">
            <NewReleasesIcon color="secondary" />
          </IconButton>
        }
      />
      <Link to={`/community/${props.community_name}/ShowBook/${props.id}`}>
        <CardMedia
          className={classes.media}
          image={image}
          title={`${props.name} اثر ${props.author}`}
          onError={handleImageError}
        />
      </Link>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {props.description}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {props.genre}
        </Typography>
        <Typography variant="body1" color="secondary" component="p">
          {props.price} تومان
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<ShoppingCartIcon />}
          onClick={handleReserveClick}
        >
          افزودن به سبد
        </Button>
      </CardActions>
    </Card>
  );
}

export default Book2;
