import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [money, setMoney] = useState(100)
  console.log(eatenSushi);
  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then((sushis) => setSushiList(sushis))
  }, [])




  function handleSushi(clickedSushi){
    console.log("you bought me!")
    const filterSushi = sushiList.filter((sushi) => sushi.id !== clickedSushi.id)
    // setSushiList(filterSushi)
   
    if(money >= clickedSushi.price){
      setMoney((money) => money - clickedSushi.price)
      setEatenSushi([...eatenSushi, clickedSushi])
      setSushiList(filterSushi)
      } else{
         return null
      }
  }

//create conditional rendering where?
  // if(money >= 0){
  // setMoney((money) => money - clickedSushi.price)
  // } else{
  //    return null
  // }


  return (
    <div className="app">
      <SushiContainer sushis = {sushiList} handleSushi={handleSushi}/>
      <Table plates={eatenSushi} money={money} />
    </div>
  );
}

export default App;
