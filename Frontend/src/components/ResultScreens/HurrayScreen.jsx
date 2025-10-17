import React from "react";
import "./ResultScreens.css";
import trophy from "../../assets/trophy.png";

const HurrayScreen = ({ onPlayAgain, onShowRules }) => (
  <div className="result-screen win" style={{ height: '100vh', width: '100%', background: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
    <div
      style={{
        position: 'relative',
        width: 400,
        height: 300,
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      {/* Trophy */}
      <img
        src={trophy}
        alt="trophy"
        style={{ width: 200.43, height: 201, position: 'relative', zIndex: 2 }}
      />

      {/* Stars with glowing animation */}
      <style>
      {`
        @keyframes glow {
          0% { text-shadow: 0 0 5px #fff, 0 0 10px #D9D9D9, 0 0 15px #D9D9D9; opacity: 0.8; }
          50% { text-shadow: 0 0 15px #fff, 0 0 25px #D9D9D9, 0 0 35px #b8a235ff; opacity: 1; }
          100% { text-shadow: 0 0 5px #fff, 0 0 10px #D9D9D9, 0 0 15px #D9D9D9; opacity: 0.8; }
        }
        .star-glow {
          animation: glow 2s infinite ease-in-out;
          color: #D9D9D9;
        }
      `}
      </style>

      <span className="star-glow" style={{ position: 'absolute', left: 50, bottom: 10, fontSize: 32 }}>★</span>
      <span className="star-glow" style={{ position: 'absolute', left: -50, top: 75, fontSize: 130, animationDelay: '0.3s' }}>★</span>
      <span className="star-glow" style={{ position: 'absolute', left: 25, top: 30, fontSize: 75, animationDelay: '0.6s' }}>★</span>
      <span className="star-glow" style={{ position: 'absolute', left: 65, top: 0, fontSize: 32, animationDelay: '0.9s' }}>★</span>
      <span className="star-glow" style={{ position: 'absolute', left: 160, top: 30, fontSize: 32, animationDelay: '1.2s' }}>★</span>
      <span className="star-glow" style={{ position: 'absolute', right: 60, top: -25, fontSize: 103, animationDelay: '0.5s' }}>★</span>
      <span className="star-glow" style={{ position: 'absolute', right: 15, top: 70, fontSize: 32, animationDelay: '1s' }}>★</span>
      <span className="star-glow" style={{ position: 'absolute', right: -20, bottom: -10, fontSize: 150, animationDelay: '1.5s' }}>★</span>
    </div>

    <h1 style={{ fontSize: 91, fontWeight: 700, margin: 0 }}>HURRAY!!</h1>
    <h2 style={{ fontSize: 41, fontWeight: 500, margin: 0 }}>YOU WON THE GAME</h2>
    <button className="play-again-btn" style={{ marginTop: 80, marginBottom: 10, fontSize: 15, color: '#6B6B6B' }} onClick={onPlayAgain}>PLAY AGAIN</button>
    <button className="footerButton" style={{ position: 'absolute', right: 40, bottom: 40 }} onClick={onShowRules}>RULES</button>
  </div>
);

export default HurrayScreen;
