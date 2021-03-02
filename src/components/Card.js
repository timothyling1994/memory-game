import React from "react";


function Card(props) {

  const registerClick = () => {
    props.makeCardSelection(props.id);
  };

  return (
    <div className="card" id={props.id} onClick={registerClick}>
      <img src={`/assets/${props.imgName}.jpg`} alt={props.imgName}></img>
      <div className="caption">{props.imgName}</div>
    </div>
  );
}

export default Card;
