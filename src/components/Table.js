import React from "react";
import { render } from "react-dom";

function Table({ plates, money }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  
  // console.log(plates)
  console.log(money)
  

  // const moneyRemainding = plates.map((plate) => {
  //   console.log(money)
  //   console.log(plate.price)
  //   handleMoney(plate)
  // })

  


  //everytime a plate is rendered onto the table, we want to subtract $5 from the initial value 
  //do we need to add state? if so, where? 

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
