import React from "react";

function Sushi({ sushi, handleSushi }) {
  
const {img_url, name, price} = sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleSushi(sushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img_url}
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
