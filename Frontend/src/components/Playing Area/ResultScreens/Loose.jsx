import React from "react";
// import "./ResultScreens.css";

const Loose = ({ onPlayAgain, onShowRules }) => (
    <div
        className="result-screen lose"
        style={{
            // height: "100vh",
            // width: "100%",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        {/* Broken trophy or sad face */}
        <div style={{ position: "relative", marginBottom: 30, marginTop: 40 }}>
            <span
                role="img"
                aria-label="broken-trophy"
                style={{
                    fontSize: 200,
                    position: "relative",
                    zIndex: 2,
                    color: "#FFD600",
                }}
            >
                💔
            </span>

            {/* Faded stars to match Hurray layout */}
            <span
                style={{
                    position: "absolute",
                    left: -60,
                    top: 10,
                    fontSize: 48,
                    color: "#fff8",
                    transform: "rotate(20deg)",
                }}
            >
                ★
            </span>
            <span
                style={{
                    position: "absolute",
                    left: 60,
                    top: -30,
                    fontSize: 32,
                    color: "#fff8",
                    transform: "rotate(-15deg)",
                }}
            >
                ★
            </span>
            <span
                style={{
                    position: "absolute",
                    left: 120,
                    top: 30,
                    fontSize: 64,
                    color: "#fff8",
                    opacity: 0.5,
                }}
            >
                ★
            </span>
        </div>

        {/* Text */}
        <h1 style={{ fontSize: 91, fontWeight: 700, margin: 0, color: "#fff" }}>
            YOU LOST!
        </h1>
        <h2
            style={{
                fontSize: 41, 
                fontWeight: 500,
                margin: "10px 0 30px 0",
                color: "#fff",
            }}
        >
            BETTER LUCK NEXT TIME
        </h2>

        <button className="play-again-btn" style={{ marginTop: 20, marginBottom: 10, fontSize: 15, color: '#6B6B6B' }} onClick={onPlayAgain}>PLAY AGAIN</button>
        <button className="footerButton" style={{ position: 'absolute', right: 20, bottom: 20 }} onClick={onShowRules}>RULES</button>
    </div>
);

export default Loose;
