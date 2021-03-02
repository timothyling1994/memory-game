import React from "react";

const Header = (props) => {
  return (
    <div className="header">Memory Game
    	<div className="score-row">
	    	<div className="score">score:{props.currentScore}</div>
	    </div>
    </div>
  );
}

export default Header;
