import React from "react";
import "./ResultScreens.css";

const HurrayScreen = ({ onPlayAgain, onShowRules }) => (
  <div className="result-screen win" style={{ justifyContent: 'center', height: '100vh', background: '#8cc461' }}>
    <div style={{ position: 'relative', marginBottom: 40 }}>
      {/* Trophy and stars SVG */}
      <span role="img" aria-label="trophy" style={{ fontSize: 120, position: 'relative', zIndex: 2, color: '#FFD600' }}>🏆</span>
      {/* Stars */}
      <span style={{ position: 'absolute', left: -60, top: 10, fontSize: 48, color: '#fff8' }}>★</span>
      <span style={{ position: 'absolute', left: 60, top: -30, fontSize: 32, color: '#fff8' }}>★</span>
      <span style={{ position: 'absolute', left: 120, top: 30, fontSize: 64, color: '#fff8' }}>★</span>
      <span style={{ position: 'absolute', left: -100, top: 60, fontSize: 32, color: '#fff8' }}>★</span>
      <span style={{ position: 'absolute', left: 160, top: 80, fontSize: 40, color: '#fff8' }}>★</span>
    </div>
    <h1 style={{ fontSize: 60, fontWeight: 700, margin: 0 }}>HURRAY!!</h1>
    <h2 style={{ fontSize: 30, fontWeight: 500, margin: '10px 0 30px 0' }}>YOU WON THE GAME</h2>
    <button className="play-again-btn" style={{ marginTop: 20, marginBottom: 10 }} onClick={onPlayAgain}>PLAY AGAIN</button>
    <button className="rules-btn" style={{ position: 'absolute', right: 40, bottom: 0 }} onClick={onShowRules}>RULES</button>
  </div>
);

export default HurrayScreen;
