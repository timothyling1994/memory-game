import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import CardIDs from "./cardIDs.js";


function App() {

  let cardOrderArr=[];
  const totalCards = CardIDs.cardIDs.length;
  const [selectedCards,setCardSelection] = useState([]);
  const [score,setScore] = useState(0);

  const initCardOrderArr=()=>{
  
    for(let i=0;i<totalCards;i++)
    {
      cardOrderArr[i]=i;
    }
  };

  initCardOrderArr();
  const [cardOrder,setCardOrder] = useState(cardOrderArr);

  const randomizeCardOrder = () =>{

    cardOrderArr.sort(function(){
      return Math.random() - 0.5;
    });
  
    const copyArr = [...cardOrderArr];
    setCardOrder(copyArr);
  };

  const makeCardSelection=(cardId)=>{
    
    if(!selectedCards.includes(cardId))
    {
      let newArr = selectedCards.concat(cardId);
      setCardSelection(newArr);
      setScore(score+1);
    }
    else{
      console.log("Game Over");
      setCardSelection([]);
      setScore(0);
    }
  };

  useEffect(randomizeCardOrder,[score]);

  return (
    <div className="App">
      <Header currentScore={score}/>
      {cardOrder.map((cardNum)=>{   
        return <Card key={CardIDs.cardIDs[cardNum][1]} id={CardIDs.cardIDs[cardNum][1]} imgName={CardIDs.cardIDs[cardNum][0]} makeCardSelection={makeCardSelection}/>
      })}
    </div>
  );
}

export default App;
