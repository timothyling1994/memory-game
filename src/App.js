import './App.css';
import React, { useState } from "react";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import uniqid from "uniqid";

function App() {

  const totalCards = 8;
  let cardOrderArr=[];
  const cardImagesLocArr = [
    "andre_iguodala",
    "andrew_bogut",
    "draymond_green",
    "harrison_barnes",
    "klay_thompson",
    "leandro_barbosa",
    "marreese_speights",
    "stephen_curry"
  ]

  const initCardOrderArr=()=>{
    for(let i=0;i<totalCards;i++)
    {
      cardOrderArr[i]=i;
    }
  };

  const randomizeCardOrder = () =>{
    cardOrderArr.sort(function(){
      return Math.random() - 0.5;
    });
    console.log(cardOrderArr);
  };

  initCardOrderArr();
  randomizeCardOrder();

  const [selectedCards,setCardSelection] = useState([]);

  const makeCardSelection=(cardNum)=>{
    let newArr = selectedCards.concat(cardNum);
    setCardSelection(newArr);
  };

  return (
    <div className="App">
      <Header/>
      {cardOrderArr.map((cardNum)=>{
        return <Card key={uniqid()} uniqid imgSrc={cardImagesLocArr[cardNum]}/>
      })}
    </div>
  );
}

export default App;
