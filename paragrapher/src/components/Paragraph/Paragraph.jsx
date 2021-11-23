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
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
import { useStyles, theme } from "../theme";
import { spacing } from "@mui/system";
import { ThemeProvider } from "@material-ui/styles";
import Chip from "@material-ui/core/Chip";
import EditIcon from "@material-ui/icons/Edit";
import ParagraphEditor from "./ParagraphEditor";
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
  function demoMethod() {
    props.sendData(props.p_id);
  }
  const handleEdit = () => {
    window.location.replace("/edit/community/");
    ParagraphEditor();
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginBottom: "0.5rem" }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                style={{
                  backgroundColor: randomColor(),
                  width: "3rem",
                  height: "3rem",
                }}
                aria-label="recipe"
              >
                <Typography className={classes.typography}>
                  {props.author[0]}
                </Typography>
              </Avatar>
            }
            action={
              props.isPotd ? (
                <Button
                  style={{
                    backgroundColor: "gold",
                    fontFamily: "BYekan",
                    cursor: "default",
                  }}
                >
                  پاراگراف برتر
                </Button>
              ) : (
                ""
              )
            }
            title={
              <Typography
                className={classes.typographyBold}
                style={{ marginRight: "0.5rem" }}
              >
                {props.author}
              </Typography>
            }
            subheader={
              <>
                <Typography
                  className={classes.typography}
                  style={{ marginRight: "0.5rem", fontSize: 12 }}
                >
                  {props.date}
                </Typography>
                {Array.isArray(props.tags)
                  ? props.tags.map((e) => {
                      return (
                        <Chip
                          variant="default"
                          className={classes.typography}
                          color="secondary"
                          style={{ margin: "0.3rem 0.2rem 0 0" }}
                          size="small"
                          label={e}
                          onClick={() => {}}
                        />
                      );
                    })
                  : ""}
              </>
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
            {props.canAction ? (
              <CardActions disableSpacing>
                <IconButton aria-label="like paragraph" onClick={handleLike}>
                  {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton aria-label="show comments">
                  <CommentIcon />
                </IconButton>
                <IconButton aria-label="" style={{ visibility: "hidden" }}>
                  <SendIcon style={{ transform: "rotate(180deg)" }} />
                </IconButton>
              </CardActions>
            ) : (
              ""
            )}
            {props.isMine ? (
              <CardActions disableSpacing>
                <IconButton onClick={demoMethod}>
                  <EditIcon />
                </IconButton>
              </CardActions>
            ) : (
              ""
            )}
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default Paragraph;
