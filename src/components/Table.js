import React from "react";

function Table({ plates = [], eatenSushi }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const renderPlates = emptyPlates.push(eatenSushi)

  return (
    <>
      <h1 className="remaining">
        You have: ${/* Give me how much money I have left */} remaining!
      </h1>
      <div className="table">
        <div className="stack">{renderPlates}</div>
      </div>
    </>
  );
}

export default Table;
