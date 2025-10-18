import React from "react";
import ResultScreenLayout from "../ResultScreenLayout";
// import "./ResultScreens.css";

const TieScreen = ({ onReplay, userPick, pcPick, onShowRules }) => (
  <ResultScreenLayout
    title="TIE UP"
    userPick={userPick}
    pcPick={pcPick}
    mainButtonText="REPLAY"
    onMainButton={onReplay}
    showNext={false}
    onShowRules={onShowRules}
  />
);

export default TieScreen;
