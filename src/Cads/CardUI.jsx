import React from "react";
import "./card-style.css";

const Card = ({ cardDetails }) => {
  return (
    <div className='col-md-3 d-flex'>
      <div className='card shadow mt-2'>
        <div className='card-body'>
          <h4 className='card-title d-flex'>{cardDetails.title}</h4>
          <hr></hr>
          <h6 className='text-dark d-flex'>Available Currencies</h6>
          <div className='allButton d-flex flex-wrap'>
            {cardDetails.currencies.map((currency, index) => (
              <button
                key={index}
                className='btn btn-success mt-2 col-2 m-1 p-1'
              >
                {currency}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
