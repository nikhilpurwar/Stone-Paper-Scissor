import React from "react";
import ResultScreenLayout from "../common/ResultScreenLayout";
import "./ResultScreens.css";

const WinScreen = ({ onPlayAgain, onNext, userPick, pcPick, userScore, pcScore, onShowRules }) => (
  <ResultScreenLayout
    title="YOU WIN"
    subtitle="AGAINST PC"
    userPick={userPick}
    pcPick={pcPick}
    userScore={userScore}
    pcScore={pcScore}
    mainButtonText="PLAY AGAIN"
    onMainButton={onPlayAgain}
    showNext={true}
    onNext={onNext}
    onShowRules={onShowRules}
  />
);

export default WinScreen;
