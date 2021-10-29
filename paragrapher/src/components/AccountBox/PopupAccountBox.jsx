import React from 'react'
import AccountBox from './AccountBox';
import { useState } from 'react';
import './PopupAccountBox.css';

function PopupAccountBox(props) {
    const [innerAccountBoxTrigger, setInnerAccountBoxTrigger] = useState(false);
    return (props.trigger) ? (
        <div className="popup">
            <div className="innerPopup col-12 col-sm-8 col-md-6 col-lg-5 d-flex justify-content-center">
                {/* <button className="closeButton" onClick={() => props.setTrigger(false)}>Close!</button> */}
                <AccountBox setInnerTrigger = {props.setTrigger}/>
            </div>
        </div>
    ) : "";
}

export default PopupAccountBox
