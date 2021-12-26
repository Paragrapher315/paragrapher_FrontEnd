/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
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
import { useHistory } from "react-router-dom";
import { stringToColor } from "../TopCommunities";
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

  const history = useHistory();
  const something = useState(likeIsOn());

  const [liked, setLiked] = useState(null);
  const [LikeCount, SetLikeCount] = useState(props.likeCount);
  const [CommentCount, SetCommentCount] = useState(props.commentCount);

  const classes = useStyles(theme);

  const handleLike = () => {
    Like(props.communityName, props.p_id).then((res) => {
      setLiked(!liked);
      if (liked) {
        SetLikeCount(LikeCount - 1);
        easyLikeCount();
      } else {
        SetLikeCount(LikeCount + 1);
        easyLikeCount();
      }
    });

    console.log(references.url_address + props.avatar);
    // send like data to backend
  };
  function demoMethod() {
    // props.sendData(props.p_id, props.communityName);
    history.push("/paragraph/edit/" + props.communityName + "/" + props.p_id);
  }
  function demoMethod2() {
    // props.sendDataComment(props.p_id, props.communityName);
    history.push("/paragraph/" + props.communityName + "/" + props.p_id);
  }
  function handleDelete() {
    DeleteParagraph(props.communityName, props.p_id.toString());
  }
  const persianDate = new Date(props.date.replace("-", "/")).toLocaleString(
    "fa-IR"
  );
  function easyLikeCount() {
    let easyCount;
    let easyString;
    if (LikeCount > 1000000) {
      easyCount = LikeCount / 1000000;
      easyCount = Math.round(easyCount * 10) / 10;
      easyString = easyCount + "میلیون";
    } else if (LikeCount > 1000) {
      easyCount = LikeCount / 1000;
      easyCount = Math.round(easyCount * 10) / 10;
      easyString = easyCount + "هزار";
    } else {
      easyCount = LikeCount;
      easyString = easyCount;
    }
    // window.alert("Like Counter is : ", props.likeCount);
    return easyString;
  }

  function easyCommentCount() {
    let easyCount;
    let easyString;
    if (CommentCount > 1000000) {
      easyCount = CommentCount / 1000000;
      easyCount = Math.round(easyCount * 10) / 10;
      easyString = easyCount + "میلیون";
    } else if (CommentCount > 1000) {
      easyCount = CommentCount / 1000;
      easyCount = Math.round(easyCount * 10) / 10;
      easyString = easyCount + "هزار";
    } else {
      easyCount = CommentCount;
      easyString = easyCount;
    }
    // window.alert("Like Counter is : ", props.likeCount);
    return easyString;
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginBottom: "0.5rem" }}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                style={{
                  backgroundColor: stringToColor(props.user),
                  width: "3rem",
                  height: "3rem",
                }}
                src={references.url_address + props.avatar}
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
                {Array.isArray(props.tags) && props.tags[0] != ""
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
              {props.author} {props.author !== "" && ":"}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {props.canAction ? (
              <CardActions disableSpacing>
                <div>
                  <IconButton aria-label="like paragraph" onClick={handleLike}>
                    {liked ? (
                      <FavoriteIcon style={{ marginLeft: "0.5vw" }} />
                    ) : (
                      <FavoriteBorderIcon style={{ marginLeft: "0.5vw" }} />
                    )}
                    <Typography display="inline">{easyLikeCount()}</Typography>
                  </IconButton>
                </div>
                <div>
                  <IconButton aria-label="show comments" onClick={demoMethod2}>
                    <CommentIcon style={{ marginLeft: "0.5vw" }} />
                    <Typography display="inline">
                      {easyCommentCount()}
                    </Typography>
                  </IconButton>
                </div>
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
