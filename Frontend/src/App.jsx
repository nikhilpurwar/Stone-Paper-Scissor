import './App.css';
import { useState, useEffect } from 'react';
import Rules from './components/Rule Box/Rules';
import ScoreCard from './components/Score Card/ScoreCard';
import PlayingArea from './components/Playing Area/PlayingArea';

import WinScreen from './components/ResultScreens/WinScreen';
import LoseScreen from './components/ResultScreens/LoseScreen';
import TieScreen from './components/ResultScreens/TieScreen';
import HurrayScreen from './components/ResultScreens/HurrayScreen';
import Loose from './components/ResultScreens/Loose';


function getResult(userPick, pcPick) {
  if (userPick === pcPick) return 'tie';
  if (
    (userPick === 'rock' && pcPick === 'scissors') ||
    (userPick === 'paper' && pcPick === 'rock') ||
    (userPick === 'scissors' && pcPick === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

function getRandomPick() {
  const picks = ['rock', 'paper', 'scissors'];
  return picks[Math.floor(Math.random() * 3)];
}

function App() {
  const [showRules, setShowRules] = useState(false);
  const [userScore, setUserScore] = useState(() => {
    const val = localStorage.getItem('userScore');
    return val ? parseInt(val, 10) : 0;
  });
  const [pcScore, setPcScore] = useState(() => {
    const val = localStorage.getItem('pcScore');
    return val ? parseInt(val, 10) : 0;
  });
  const [userPick, setUserPick] = useState(null);
  const [pcPick, setPcPick] = useState(null);
  const [result, setResult] = useState(null);
  const [gameState, setGameState] = useState('playing'); // playing, win, lose, tie

  const handlePick = (pick) => {
    const pc = getRandomPick();
    setUserPick(pick);
    setPcPick(pc);
    const res = getResult(pick, pc);
    setResult(res);
    if (res === 'win') {
      setUserScore((s) => {
        const newScore = s + 1;
        localStorage.setItem('userScore', newScore);
        return newScore;
      });
      setGameState('win');
    } else if (res === 'lose') {
      setPcScore((s) => {
        const newScore = s + 1;
        localStorage.setItem('pcScore', newScore);
        return newScore;
      });
      setGameState('lose');
    } else {
      setGameState('tie');
    }
  };
  // Sync scores to localStorage if changed (for external updates)
  useEffect(() => {
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('pcScore', pcScore);
  }, [userScore, pcScore]);


  const handlePlayAgain = () => {
    setUserPick(null);
    setPcPick(null);
    setResult(null);
    setGameState('playing');
  };

  const handleNext = () => {
    // Ensure rules modal is closed before navigating
    setShowRules(false);
    userScore >= pcScore ? setGameState('hurray') : setGameState('loose');
  };

  return (
    <div className="App">
      <div className="main">
        <ScoreCard userScore={userScore} pcScore={pcScore} />
        {gameState === 'playing' && (
          <PlayingArea
            onPick={handlePick}
            userPick={userPick}
            pcPick={pcPick}
            result={result}
            onShowRules={() => setShowRules(true)}
          />
        )}
        {gameState === 'win' && (
          <WinScreen
            onPlayAgain={handlePlayAgain}
            onNext={handleNext}
            userPick={userPick}
            pcPick={pcPick}
            userScore={userScore}
            pcScore={pcScore}
            onShowRules={() => setShowRules(true)}
          />
        )}

        {gameState === 'lose' && (
          <LoseScreen
            onPlayAgain={handlePlayAgain}
            userPick={userPick}
            pcPick={pcPick}
            userScore={userScore}
            pcScore={pcScore}
            onShowRules={() => setShowRules(true)}
          />
        )}
        {gameState === 'tie' && (
          <TieScreen
            onReplay={handlePlayAgain}
            userPick={userPick}
            pcPick={pcPick}
            userScore={userScore}
            pcScore={pcScore}
            onShowRules={() => setShowRules(true)}
          />
        )}
        {gameState === 'hurray' && (
          <HurrayScreen onPlayAgain={handlePlayAgain} onShowRules={() => setShowRules(true)} />
        )}
        {gameState === 'loose' && (
          <Loose onPlayAgain={handlePlayAgain} onShowRules={() => setShowRules(true)} />
        )}
      </div>
      {showRules && <Rules closeRules={() => setShowRules(false)} />}
    </div>
  );
}

export default App;
