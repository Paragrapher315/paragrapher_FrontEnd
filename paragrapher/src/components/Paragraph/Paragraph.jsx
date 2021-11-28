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
import Link from "@material-ui/core/Link";
import * as moment from "jalali-moment";
import axios from "axios";
import { makeURL } from "../../Utils/Common";
import references from "../../assets/References.json";
import { DeleteParagraph, isLiked, Like } from "../../Utils/Connection";
import { Delete } from "@material-ui/icons";
function randomColor(input) {
  let hex = Math.floor(input * 0xf125ff);
  let color = "#" + hex.toString(16);
  return color;
}

function Paragraph(props) {
  function likeIsOn() {
    if (props.canAction)
      isLiked(props.communityName, props.p_id).then((res) => {
        setLiked(res.data.message);
      });
    else return false;
  }
  const something = useState(likeIsOn());

  const [liked, setLiked] = useState(null);

  const classes = useStyles(theme);

  const handleLike = () => {
    Like(props.communityName, props.p_id).then((res) => {
      setLiked(!liked);
    });
    // send like data to backend
  };
  function demoMethod() {
    props.sendData(props.p_id, props.communityName);
  }
  function demoMethod2() {
    props.sendDataComment(props.p_id, props.communityName);
  }
  function handleDelete() {
    DeleteParagraph(props.communityName, props.p_id.toString());
  }
  const persianDate = new Date(props.date.replace("-", "/")).toLocaleString(
    "fa-IR"
  );

  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginBottom: "0.5rem" }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                style={{
                  backgroundColor: randomColor(parseInt(props.userID)),
                  width: "3rem",
                  height: "3rem",
                }}
                aria-label="recipe"
              >
                <Typography className={classes.typography}>
                  {props.user[0]}
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
                {props.user}
              </Typography>
            }
            subheader={
              <>
                <Typography
                  className={classes.typography}
                  style={{ marginRight: "0.5rem", fontSize: 12 }}
                >
                  {persianDate}
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
                <Typography style={{ float: "left" }}>
                  از اجتماع :
                  <Link
                    className={classes.link}
                    color="secondary"
                    href={"/community/" + props.communityName}
                    style={{ float: "left" }}
                  >
                    {props.communityName}
                  </Link>
                </Typography>
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
            <Typography style={{ float: "left", paddingLeft: "2vw" }}>
              {props.book}
            </Typography>
            <Typography style={{ float: "left", paddingLeft: "2vw" }}>
              {props.author} :
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {props.canAction ? (
              <CardActions disableSpacing>
                <IconButton aria-label="like paragraph" onClick={handleLike}>
                  {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton
                  disabled
                  aria-label="show comments"
                  onClick={demoMethod2}
                >
                  <CommentIcon />
                </IconButton>
                {/* <IconButton aria-label="" style={{ visibility: "hidden" }}>
                  <SendIcon style={{ transform: "rotate(180deg)" }} />
                </IconButton> */}
                {props.isMine && (
                  <>
                    <IconButton onClick={demoMethod}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={handleDelete}>
                      <Delete />
                    </IconButton>
                  </>
                )}
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
