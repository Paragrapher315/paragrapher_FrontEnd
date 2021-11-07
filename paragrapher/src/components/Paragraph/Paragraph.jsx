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
function Paragraph() {
  const [liked, setLiked] = useState(false);
  const classes = useStyles(theme);
  const handleLike = () => {
    // send like data to backend
    setLiked(!liked);
  };
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <Typography className={classes.typography}>ک</Typography>
            </Avatar>
          }
          action={<Button>پاراگراف برتر</Button>}
          title={
            <Typography
              className={classes.typographyBold}
              style={{ marginRight: "0.5rem" }}
            >
              کیا
            </Typography>
          }
          subheader={
            <Typography
              className={classes.typography}
              style={{ marginRight: "0.5rem" }}
            >
              15 آبان 1400
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
            این یک پاراگراف نمونه است. این یک پاراگراف نمونه است. این یک
            پاراگراف نمونه است. این یک پاراگراف نمونه است. این یک پاراگراف نمونه
            است. این یک پاراگراف نمونه است. این یک پاراگراف نمونه است. این یک
            پاراگراف نمونه است. این یک پاراگراف نمونه است. این یک پاراگراف نمونه
            است. این یک پاراگراف نمونه است. این یک پاراگراف نمونه است. این یک
            پاراگراف نمونه است. این یک پاراگراف نمونه است. این یک پاراگراف نمونه
            است.
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
    </>
  );
}

export default Paragraph;
