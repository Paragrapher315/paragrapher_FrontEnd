import React, { Component, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  IconButton,
  CardHeader,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
import { useStyles, theme } from "../theme";
import { spacing } from "@mui/system";

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);

  return color;
}

function Paragraph(props) {
  const [liked, setLiked] = useState(false);
  const classes = useStyles(theme);
  const handleLike = () => {
    // send like data to backend
    setLiked(!liked);
  };
  return (
    <div style={{ marginTop: "0.5rem" }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              style={{ backgroundColor: randomColor() }}
              aria-label="recipe"
            >
              <Typography className={classes.typography}>
                {props.avatar}
              </Typography>
            </Avatar>
          }
          action={props.isPotd ? <Button>پاراگراف برتر</Button> : ""}
          title={
            <Typography
              className={classes.typographyBold}
              style={{ marginRight: "0.5rem" }}
            >
              {props.author}
            </Typography>
          }
          subheader={
            <Typography
              className={classes.typography}
              style={{ marginRight: "0.5rem" }}
            >
              {props.date}
            </Typography>
          }
          style={{ textAlign: "right" }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.typography}
            style={{ textAlign: "right" }}
          >
            {props.text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like paragraph" onClick={handleLike}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton aria-label="show comments">
            <CommentIcon />
          </IconButton>
          <TextField placeholder="نظر خود را بنویسید" />
          <IconButton aria-label="">
            <SendIcon style={{ transform: "rotate(180deg)" }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Paragraph;
