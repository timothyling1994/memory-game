import React,{ useState } from "react";

const Header = () => {
  return (
    <div className="header">Memory Game
    	<div className="score-row">
	    	<div className="score">score: </div>
	    	<div className="high-score">high score: </div>
	    </div>
    </div>
  );
}

export default Header;
