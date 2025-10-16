import React, { useEffect, useRef } from 'react';
import "./Rules.css";

const Rules = ({ closeRules }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        closeRules();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeRules]);

  return (
    <div className='ruleBox-bg'>
      <div className='ruleBox' ref={boxRef}>
        <div className='rules'>
          <p className='ruleHeading'>Game Rules</p>
          <ul className='rulesList'>
            <li>Rock beats scissors, scissors beat paper, and paper beats rock.</li>
            <li>Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”</li>
            <li>Use rock, paper, scissors to settle minor decisions or simply play to pass the time</li>
            <li>If both players lay down the same hand, each player lays down another hand</li>
          </ul>
          <span className='cross' onClick={closeRules}>X</span>
        </div>
      </div>
    </div>
  );
};

export default Rules;