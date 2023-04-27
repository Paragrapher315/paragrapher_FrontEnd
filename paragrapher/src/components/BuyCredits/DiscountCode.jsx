import React, { useState } from "react";
import { Button } from "@material-ui/core";


const DiscountForm = () => {

    const [credit, setCredit] = useState();
    const [discountCode, setDiscountcode] = useState('');
    const [error, setError] = useState('');
    const applyDiscount = () => {
        if (discountCode === 'BEANIE') {
            setCredit(credit + 10000);
            setError('');
        } else {
            setError('کد تخفیف اشتباه است')
        }
    };


    // handlesubmit = () => {
    //     const { discountCode } = this.state;
    //     const url = '';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ discountCode }),
    //     })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 throw new Error('Failed apply discount');
    //             }
    //         })
    //         .then(data => {
    //             const { credit } = data;
    //             this.useState({ credit })
    //         })
    //         .catch(error => console.error(error));
    // }

    return (
        <form >
            <label>
                کد تخفیف:
                <input
                    style={
                        {
                            textAlign: "center",
                            width: "50%",
                            height: '40px',
                            paddingTop: "2vh",
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
            </label>
            <Button onClick={applyDiscount} color="secondary" variant="contained" style={
                {
                    borderRadius: "5px",
                    padding: "8px",
                }}

                type="submit">اعمال کد تخفیف</Button>

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
