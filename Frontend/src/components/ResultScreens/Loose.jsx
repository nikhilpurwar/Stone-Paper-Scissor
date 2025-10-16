import React from "react";
import "./ResultScreens.css";

const Loose = ({ onPlayAgain, onShowRules }) => (
    <div
        className="result-screen lose"
        style={{
            justifyContent: "center",
            height: "100vh",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
        }}
    >
        {/* Broken trophy or sad face */}
        <div style={{ position: "relative", marginBottom: 40 }}>
            <span
                role="img"
                aria-label="broken-trophy"
                style={{
                    fontSize: 120,
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
        <h1 style={{ fontSize: 50, fontWeight: 700, margin: 0, color: "#fff" }}>
            YOU LOST!
        </h1>
        <h2
            style={{
                fontSize: 25,
                fontWeight: 500,
                margin: "10px 0 30px 0",
                color: "#fff",
            }}
        >
            BETTER LUCK NEXT TIME
        </h2>

        <div>
            <button className="play-again-btn" style={{ marginTop: 20, marginBottom: 10 }} onClick={onPlayAgain}>PLAY AGAIN</button>
            <button className="rules-btn" onClick={onShowRules}>RULES</button>
        </div>
    </div>
);

export default Loose;
