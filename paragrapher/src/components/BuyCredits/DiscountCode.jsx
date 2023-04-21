import React, { useState } from "react";
import { Button } from "@material-ui/core";


const DiscountForm = ({ updateBalance }) => {
    const [discountCode, setDiscountCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleDiscountCodeChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: validate discount code
        const isValidDiscountCode = true;

        if (isValidDiscountCode) {
            // TODO: update user balance with discount
            updateBalance();

            setErrorMessage("");
            setDiscountCode("");
        } else {
            setErrorMessage("کد تخفیف اشتباه است");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                کد تخفیف:
                <input
                    style={{textAlign:"center", width: "50%",height:'40px', paddingTop: "2vh" ,marginTop:"2vh",paddingTop:"0.1vh",backgroundColor:"#e2e2e2",border:"none"}}
                    variant="filled"
                    type="text"
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                />
            </label>
            <Button color="secondary" variant="contained" style={{borderRadius:"5px",padding:"8px",}} type="submit">اعمال کد تخفیف</Button>
            {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
    );
};

export default DiscountForm;
