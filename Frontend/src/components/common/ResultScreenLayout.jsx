import React from "react";
import rockImage from "../../assets/stone.png";
import paperImage from "../../assets/paper.png";
import scissorsImage from "../../assets/scissor.png";

const borderColors = {
  rock: "#0074b6",
  paper: "#FFA943",
  scissors: "#BD00FF",
};

const pickIcon = {
  rock: <img style={{ height: 58, width: 80 }} src={rockImage} alt="Rock" />,
  paper: <img style={{ height: 72, width: 72 }} src={paperImage} alt="Paper" />,
  scissors: <img style={{ height: 53, width: 37 }} src={scissorsImage} alt="Scissors" />,
};

const showRings = () => (
  <>
    <style>{`
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.9; }
        50% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 0.9; }
      }

      @keyframes ringOuter {
        0% { box-shadow: 0 0 10px rgba(46, 154, 37, 0.2); }
        50% { box-shadow: 0 0 30px rgba(46, 154, 37, 0.5); }
        100% { box-shadow: 0 0 10px rgba(46, 154, 37, 0.2); }
      }

      @keyframes ringMiddle {
        0% { box-shadow: 0 0 10px #2f9a2581; }
        50% { box-shadow: 0 0 30px #2f9a25b0; }
        100% { box-shadow: 0 0 10px #2f9a2581; }
      }

      @keyframes ringInner {
        0% { box-shadow: 0 0 10px #2f9a25ef; }
        50% { box-shadow: 0 0 25px #2f9a25ef; }
        100% { box-shadow: 0 0 10px #2f9a25ef; }
      }
    `}</style>

    <div
      style={{
        position: "absolute",
        top: "-28px",
        left: "-90px",
        zIndex: 0,
        animation: "pulse 2s infinite ease-in-out",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 350,
          height: 350,
          background: "rgba(46, 154, 37, 0.39)",
          borderRadius: "50%",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.13)",
          animation: "ringOuter 2s infinite ease-in-out",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 300,
            height: 300,
            background: "#1DA82B",
            borderRadius: "50%",
            boxShadow: "0 0 10px #2f9a2581",
            animation: "ringMiddle 2s infinite ease-in-out",
          }}
        >
          <div
            style={{
              width: 250,
              height: 250,
              background: "#2E9A25",
              borderRadius: "50%",
              boxShadow: "0 0 10px #2f9a25ef",
              animation: "ringInner 2s infinite ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  </>
);


const ResultScreenLayout = ({
  title,
  subtitle,
  userPick,
  pcPick,
  mainButtonText,
  onMainButton,
  showNext,
  onNext,
  onShowRules,
}) => (
  <div
    className="result-screen"
    style={{
      background: "#8cc461",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      width: '100%',
      //   height: 'auto',
    }}
  >
    {/* Picks and result */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "5vw",
        textAlign: "center",
        flexGrow: 1,
        width: '100%',
        height: '10vh',
        boxSizing: 'border-box',
      }}
    >
      {/* User Pick */}
      <div style={{ boxSizing: "border-box", position: 'relative' }}>
        <div
          style={{
            position: "relative",
            color: "#fff",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 500,
            marginBottom: "6vh",
            zIndex: 1,
          }}
        >
          YOU PICKED
        </div>
        <div
          style={{
            position: "relative",
            width: "clamp(90px, 14vw, 140px)",
            height: "clamp(90px, 14vw, 140px)",
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `16px solid ${borderColors[userPick]}`,
            margin: "0 auto",
            zIndex: 1,
          }}
        >

          {pickIcon[userPick]}
        </div>
        {title === "YOU WIN" && showRings()}
      </div>

      {/* Center Result */}
      <div style={{ marginTop: '6rem' }}>
        <div
          style={{
            color: "#fff",
            fontSize: "clamp(22px, 4vw, 32px)",
            fontWeight: 700,
            marginBottom: "1vh",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#fff",
              marginBottom: "2vh",
            }}
          >
            {subtitle}
          </div>
        )}
        <button
          className="play-again-btn"
          style={{
            width: "clamp(120px, 25vw, 180px)",
            fontSize: "clamp(12px, 1.5vw, 15px)",
            color: "#6B6B6B",
          }}
          onClick={onMainButton}
        >
          {mainButtonText}
        </button>
      </div>

      {/* PC Pick */}
      <div style={{ boxSizing: "border-box", position: 'relative' }}>
        <div
          style={{
            position: "relative",
            color: "#fff",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 500,
            marginBottom: "6vh",
            zIndex: 1,
          }}
        >
          PC PICKED
        </div>
        <div
          style={{
            position: "relative",
            width: "clamp(90px, 14vw, 140px)",
            height: "clamp(90px, 14vw, 140px)",
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `16px solid ${borderColors[userPick]}`,
            margin: "0 auto",
            zIndex: 1,
          }}
        >
          {pickIcon[pcPick]}
        </div>
        {title === "YOU LOST" && showRings()}
      </div>
    </div>

    {/* Footer buttons */}
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "2vw",

        // marginTop: "5vh",
      }}
    >
      <button className="footerButton" onClick={onShowRules}>
        RULES
      </button>
      {showNext && (
        <button
          className="footerButton"
          onClick={(e) => {
            e.stopPropagation();
            onNext && onNext();
          }}
        >
          NEXT
        </button>
      )}
    </div>
  </div>
);

export default ResultScreenLayout;
