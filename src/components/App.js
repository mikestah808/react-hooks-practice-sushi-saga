import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [eatSushi, setEatSushi] = useState([])

  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then((sushis) => setSushiList(sushis))
  }, [])



  function handleSushi(){
    console.log("you bought me!")
    const filterSushi = sushiList.filter((sushi) => {
      if(!id === sushi.id){
        return sushi
      }
    })
    setEatSushi(filterSushi)
    
  }

//clicking on the sushi will clear the sushi off the list
//the empty sushi plate will be added to the table after the sushi is clicked 

//what do we need?
//a piece of state 

//where?
//in the App component BECAUSE the data will have to be passed not only to the Sushi Container componenet(which holds the Sushi component), but also data needs to be passed down to the Table component since plate needs to be added



  return (
    <div className="app">
      <SushiContainer sushis = {sushiList} handleSushi={handleSushi}/>
      <Table />
    </div>
  );
}

export default App;
