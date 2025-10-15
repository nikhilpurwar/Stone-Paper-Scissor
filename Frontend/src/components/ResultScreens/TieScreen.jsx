import React from "react";
import "./ResultScreens.css";



const TieScreen = ({ onReplay, userPick, pcPick, onShowRules }) => {
  // Color mapping for border
  const borderColors = {
    rock: '#0074b6',
    paper: '#ffa943',
    scissors: '#bd00ff',
  };
  return (
    <div className="result-screen tie" style={{ height: '100vh', background: '#8cc461', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      {/* Score header */}
      {/* <div style={{ margin: '40px auto 0 auto', width: 500, background: 'none', border: '3px solid #fff', borderRadius: 20, padding: '20px 0', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ textAlign: 'left', marginLeft: 30 }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#fff', letterSpacing: 2, lineHeight: '32px' }}>ROCK<br />PAPER<br />SCISSORS</div>
        </div>
        <div style={{ display: 'flex', gap: 20, marginRight: 30 }}>
          <div style={{ background: '#fff', borderRadius: 10, width: 90, height: 70, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 14, color: '#888', fontWeight: 600 }}>COMPUTER<br />SCORE</div>
            <div style={{ fontSize: 40, fontWeight: 700, color: '#222' }}>{pcScore}</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, width: 90, height: 70, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 14, color: '#888', fontWeight: 600 }}>YOUR<br />SCORE</div>
            <div style={{ fontSize: 40, fontWeight: 700, color: '#222' }}>{userScore}</div>
          </div>
        </div>
      </div> */}
      {/* Picks and result */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontSize: 18, fontWeight: 500, marginBottom: 10 }}>YOU PICKED</div>
          <div style={{ width: 140, height: 140, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `16px solid ${borderColors[userPick]}` }}>
            <span style={{ fontSize: 60, color: '#222' }}>{userPick === 'rock' ? '✊' : userPick === 'paper' ? '✋' : '✌️'}</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', margin: '0 60px' }}>
          <div style={{ color: '#fff', fontSize: 32, fontWeight: 700, marginBottom: 10 }}>TIE UP</div>
          <button className="play-again-btn" style={{ marginTop: 20, marginBottom: 10, width: 180, fontSize: 20 }} onClick={onReplay}>REPLAY</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontSize: 18, fontWeight: 500, marginBottom: 10 }}>PC PICKED</div>
          <div style={{ width: 140, height: 140, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `16px solid ${borderColors[pcPick]}` }}>
            <span style={{ fontSize: 60, color: '#222' }}>{pcPick === 'rock' ? '✊' : pcPick === 'paper' ? '✋' : '✌️'}</span>
          </div>
        </div>
      </div>
      {/* Footer buttons */}
      <div style={{ position: 'absolute', right: 40, bottom: 40, display: 'flex', gap: 20 }}>
        <button className="rules-btn" style={{ border: '2px solid #fff', background: 'transparent', color: '#fff', borderRadius: 10, fontWeight: 600, fontSize: 21, width: 119, height: 40 }} onClick={onShowRules}>RULES</button>
      </div>
    </div>
  );
};

export default TieScreen;
