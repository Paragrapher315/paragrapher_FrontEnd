import React, { useState } from "react";
import "./LoanOptionCss.css";

function LoanOption() {
  const [showContent, setShowContent] = useState(false);

  const [daysValue, setDaysValue] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const handleButtonClick = () => {
    setShowContent(true);
  };
  const handleDaysInputChange = (event) => {
    setDaysValue(parseInt(event.target.value, 10));
  };

  const handleCalculateClick = (event) => {
    event.preventDefault();
    let cost = 0;
    for (let i = 1; i <= daysValue; i++) {
      cost += 500;
    }
    setTotalCost(cost);
  };

  return (
    <>
      <div>
        <button
          class="btn btn-outline-secondary mt-auto"
          onClick={handleButtonClick}
          //window.location.href = "/paragraph/create/"
        >
          <div class="text-center"> قرض کتاب</div>
        </button>
        {showContent && (
          <div
            className="days-page-container"
            // style={{
            //   display:? "block"
            //     : "none",

            //window.location.href.includes("/paragraph/create/")

            // }}
          >
            <label htmlFor="days-input">لطفا تعداد روز را مشخص نمایید.</label>
            <label htmlFor="days-input">
              (هزینه هر روز قرض برابر 500 تومان میباشد)
            </label>
            <input
              id="days-input"
              type="number"
              value={daysValue}
              onChange={handleDaysInputChange}
            />
            <button onClick={handleCalculateClick}>محاسبه قیمت</button>
            {totalCost > 0 && <p>قیمت: {totalCost} تومان</p>}
          </div>
        )}
      </div>
    </>
  );
}

export default LoanOption;
