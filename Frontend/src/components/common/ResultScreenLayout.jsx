import React from "react";
import rockImage from '../../assets/stone.png';
import paperImage from '../../assets/paper.png';
import scissorsImage from '../../assets/scissor.png';

const borderColors = {
    rock: '#0074b6',
    paper: '#ffa943',
    scissors: '#bd00ff',
};

const pickIcon = {
    rock: <img style={{ height: 60, width: 80 }} src={rockImage} alt="Rock" />,
    paper: <img style={{ height: 80, width: 80 }} src={paperImage} alt="Paper" />,
    scissors: <img style={{ height: 80, width: 60 }} src={scissorsImage} alt="Scissors" />,
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
    <div className="result-screen" style={{ height: '100vh', background: '#8cc461', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        {/* Picks and result */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', marginTop: 60 }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 500, marginBottom: 30 }}>YOU PICKED</div>
                <div style={{ position: 'relative', width: 140, height: 140, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `16px solid ${borderColors[userPick]}` }}>
                    {title === "YOU WIN" && showRings()}
                    <span style={{ fontSize: 60, color: '#222' }}>{pickIcon[userPick]}</span>
                </div>
            </div>
            <div style={{ textAlign: 'center', margin: '150px 80px 0', marginTop: 150 }}>
                <div style={{ color: '#fff', fontSize: 32, fontWeight: 700 }}>{title}<br />{subtitle && <span style={{ fontSize: 20, fontWeight: 500 }}>{subtitle}</span>}</div>
                <button className="play-again-btn" style={{  width: 180, fontSize: 15, color: '#6B6B6B' }} onClick={onMainButton}>{mainButtonText}</button>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 500, marginBottom: 30 }}>PC PICKED</div>
                <div style={{ position: 'relative', width: 140, height: 140, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `16px solid ${borderColors[pcPick]}` }}>
                    {title === "YOU LOST" && showRings()}
                    <span style={{ fontSize: 60, color: '#222' }}>{pickIcon[pcPick]}</span>
                </div>
            </div>
        </div>
        {/* Footer buttons */}
        <div style={{ position: 'absolute', bottom: 20, right: 40, width: '100%', display: 'flex', justifyContent: 'flex-end', gap: 20 }}>
            <button className="footerButton" onClick={onShowRules}>RULES</button>
            {showNext && <button className="footerButton" onClick={(e) => { e.stopPropagation(); onNext && onNext(); }}>NEXT</button>}
        </div>
    </div>
);

export default ResultScreenLayout;
