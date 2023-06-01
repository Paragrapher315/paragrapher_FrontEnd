import React, { useState } from "react";
import { Button } from "@material-ui/core";


const DiscountForm = () => {

    const [credit, setCredit] = useState();
    const [discountCode, setDiscountcode] = useState('');
    const [error, setError] = useState('');
    const applyDiscount = () => {
        if (discountCode === 'BEANIE') {
            setCredit(credit - 10000);
            
        } else {
            setError('کد تخفیف اشتباه است')
        }
    };

    return (
        <form >
            <label>
                کد تخفیف:
                <input
                    style={
                        {
                            textAlign: "center",
                            width: "20%",
                            height: '40px',
                            paddingTop: "2vh",
                            marginRight:'20px',
                            marginTop: "2vh",
                            paddingTop: "0.1vh",
                            backgroundColor: "#e2e2e2",
                            border: "none"
                        }}
                    variant="filled"
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountcode(e.target.value)}
                />
                <Button class=" btn btn-primary  " onClick={applyDiscount}  variant="contained" style={
                {
                    borderRadius: "5px",
                    padding: "8px",
                    marginRight:'20px'
                }}

                type="submit">اعمال کد تخفیف</Button>
            </label>
            

            <h2>{credit}</h2>
            {error && <p
                style={{
                    color: 'red'

                }}
                className="error">{error}</p>}
        </form>
    );
};

export default DiscountForm;
