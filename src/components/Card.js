import React, { useState } from "react";

function Card(props) {
  console.log(props);

//<img src={require(`../assets/${props.imgSrc}.jpg`)}></img>
  return (
    //console.log(`../assets/${props.imgSrc}.jpg`);
    <div className="card">
      <img src={`../assets/${props.imgSrc}.jpg`}></img>
    </div>
  );
}

export default Card;
