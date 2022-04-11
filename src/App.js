import React, { useState } from "react";

import "./styles/styles.css";
import Illustration from '../images/illustration-thank-you.svg'

const ratingArray = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];

export default function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {!submitted ? (
        <div className="main-container">
          <div className="fa fa-star checked" />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating-container">
            {ratingArray.map((index, key) => {
              return (
                <div
                  className="rating"
                  key={key}
                  onClick={() => setSelectedRating(index.value)}
                >
                  {index.value}
                </div>
              );
            })}
          </div>
          <button
            className="button-container"
            onClick={() => setSubmitted(true)}
          >
            SUBMIT
          </button>
        </div>
      ) : (
        <div className="thanks-container">
          <img src={Illustration} alt="thank you illustration" />
          <div className="thanks-rating">{`You selected ${selectedRating} out of 5`}</div>
          <h1>Thank you!</h1>
          <p style={{textAlign: 'center'}}>
            We appreciate you taking the time to give rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
    </>
  );
}
