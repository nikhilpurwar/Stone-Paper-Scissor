import React from "react";
import "./GameTriangle.css";
import rockImage from '../../../assets/stone.png';
import paperImage from '../../../assets/paper.png';
import scissorsImage from '../../../assets/scissor.png';

const GameTriangle = ({ onPick }) => {
  return (
    <div className="triangle-container">
      {/* SVG lines connecting the circles */}
      <svg className="triangle-lines" viewBox="0 0 420 420">
        <line x1="80" y1="70" x2="340" y2="70" stroke="black" />
        <line x1="80" y1="70" x2="210" y2="330" stroke="black" />
        <line x1="340" y1="70" x2="210" y2="330" stroke="black" />
      </svg>

      {/* Rock */}
      <div className="circle rock" onClick={() => onPick('rock')} style={{ cursor: 'pointer' }}>
        <img src={rockImage} alt="Rock" className="icon" style={{width: 80, height: 58.51}} />
      </div>

      {/* Scissors */}
      <div className="circle scissors" onClick={() => onPick('scissors')} style={{ cursor: 'pointer' }}>
        <img src={scissorsImage} alt="Scissors" className="icon" style={{width: 37, height: 53.5}}/>
      </div>

      {/* Paper */}
      <div className="circle paper" onClick={() => onPick('paper')} style={{ cursor: 'pointer' }}>
        <img src={paperImage} alt="Paper" className="icon" style={{width: 72, height: 72}}/>
      </div>

    </div>
  );
};

export default GameTriangle;
