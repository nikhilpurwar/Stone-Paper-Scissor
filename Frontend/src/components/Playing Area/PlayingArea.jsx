import React from 'react';
import GameTriangle from './Game Triangle/GameTriangle';

const pickLabels = {
  rock: 'Rock',
  paper: 'Paper',
  scissors: 'Scissors',
};

const PlayingArea = ({ onPick, userPick, pcPick, result, onShowRules }) => {
  return (
    <>
      <div className="playing-area">
        {!userPick ? (
          <div className="pick-area">
            <GameTriangle onPick={onPick} />
          </div>
        ) : (
          <div className="result-area">
            <div className="picked">
              <div>
                <span>YOU PICKED</span>
                <div className={`circle ${userPick}`}>{pickLabels[userPick]}</div>
              </div>
              <div>
                <span>PC PICKED</span>
                <div className={`circle ${pcPick}`}>{pickLabels[pcPick]}</div>
              </div>
            </div>
            <div className="result-text">
              {result === 'win' && <h2>YOU WIN AGAINST PC</h2>}
              {result === 'lose' && <h2>YOU LOST AGAINST PC</h2>}
              {result === 'tie' && <h2>TIE UP</h2>}
            </div>
            <button className="play-again-btn" onClick={() => onPick(null)}>REPLAY</button>
          </div>
        )}
        <footer className='footer' style={{position: 'absolute', bottom: 30, right: 30}}>
          <button className="footerButton" onClick={() => onShowRules()}>RULES</button>
          {/* <button className='nextButton footerButton'>Next</button> */}
        </footer>
      </div>

    </>

  );
};

export default PlayingArea;
