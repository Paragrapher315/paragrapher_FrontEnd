import React from "react";
import AccountBox from "./AccountBox";
import { useState } from "react";
import "./PopupAccountBox.css";
import Modal from "@material-ui/core/Modal";
import { useStyles, theme } from "../theme";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function PopupAccountBox(props) {
  const classes = useStyles(theme);

  const handleClose = () => {
    props.setTrigger(false);
  };
  const [innerAccountBoxTrigger, setInnerAccountBoxTrigger] = useState(false);
  return props.trigger ? (
    <div className="popup">
      <Modal
        className={classes.modal}
        open={props.trigger}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.trigger}>
          <AccountBox setInnerTrigger={props.setTrigger} />
        </Fade>
      </Modal>
    </div>
  ) : (
    ""
  );
}

//<div className="innerPopup col-12 col-sm-8 col-md-6 col-lg-5 d-flex justify-content-center">
// eslint-disable-next-line no-lone-blocks
{
  /* <button className="closeButton" onClick={() => props.setTrigger(false)}>Close!</button> */
}
//<AccountBox setInnerTrigger={props.setTrigger} />
//</div>;

export default PopupAccountBox;
