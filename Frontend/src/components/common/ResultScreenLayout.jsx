import React from "react";
import rockImage from "../../assets/stone.png";
import paperImage from "../../assets/paper.png";
import scissorsImage from "../../assets/scissor.png";

const borderColors = {
  rock: "#0074b6",
  paper: "#ffa943",
  scissors: "#bd00ff",
};

const pickIcon = {
  rock: <img style={{ height: "60%", width: "60%" }} src={rockImage} alt="Rock" />,
  paper: <img style={{ height: "70%", width: "70%" }} src={paperImage} alt="Paper" />,
  scissors: <img style={{ height: "70%", width: "60%" }} src={scissorsImage} alt="Scissors" />,
};

const showRings = () => (
  <>
    <div style={{ position: 'absolute', top: -35, left: -35, width: 170, height: 170, border: '20px solid #2E9A25', borderRadius: '50%', background: 'transparent', boxShadow: '0 0 10px #2f9a25ef' }}></div>
    <div style={{ position: 'absolute', top: -52.69, left: -52.69, width: 210, height: 210, border: '18px solid #2f9a259f', borderRadius: '50%', background: 'transparent', boxShadow: '0 0 10px #2f9a2581' }}></div>
    <div style={{ position: 'absolute', top: -68, left: -68, width: 245, height: 245, border: '16px solid #2f9a254b', borderRadius: '50%', background: 'transparent', boxShadow: '0 0 10px #2f9a2531' }}></div>
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
      <div style={{boxSizing: "border-box"}}>
        <div
          style={{
            color: "#fff",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 500,
            marginBottom: "6vh",
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
            border: `clamp(8px, 1.5vw, 16px) solid ${borderColors[userPick]}`,
            margin: "0 auto",
          }}
        >
          {title === "YOU WIN" && showRings()}
          {pickIcon[userPick]}
        </div>
      </div>

      {/* Center Result */}
      <div style={{marginTop: '6rem'}}>
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
      <div>
        <div
          style={{
            color: "#fff",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 500,
            marginBottom: "6vh",
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
            border: `clamp(8px, 1.5vw, 16px) solid ${borderColors[pcPick]}`,
            margin: "0 auto",
          }}
        >
          {title === "YOU LOST" && showRings()}
          {pickIcon[pcPick]}
        </div>
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
