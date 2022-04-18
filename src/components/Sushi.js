import React from "react";

function Sushi({ name, img, price, handleSushi }) {
  

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
