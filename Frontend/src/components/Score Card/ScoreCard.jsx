import React from 'react'
import './ScoreCard.css'

const ScoreCard = ({ userScore = 0, pcScore = 0 }) => {
    return (
        <div className='scoreCard'>
            <div className='gameName'>
                <p>ROCK</p>
                <p>PAPER</p>
                <p>SCISSORS</p>
            </div>
            <div className='scoreBoard'>
                <div className='score'>
                    <p>COMPUTER SCORE</p>
                    <h1>{pcScore}</h1>
                </div>
                <div className='score'>
                    <p>YOUR <br /> SCORE</p>
                    <h1>{userScore}</h1>
                </div>
            </div>
        </div>
    );
};

export default ScoreCard;