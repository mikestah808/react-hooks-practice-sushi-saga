import React, { useState } from "react";
import { render } from "react-dom";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handleSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0)



  function handleClick(){
    console.log("next 4 sushis!");
    setSushiIndex((sushiIndex) => sushiIndex + 4)
  }


  const size = 4;
  const sushiList = sushis.slice(sushiIndex, sushiIndex + size).map((sushi) => {
  
    return <Sushi key={sushi.id} sushi={sushi} handleSushi={handleSushi}/> 
  })
  


  return (
    <div className="belt">
      {sushiList}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
