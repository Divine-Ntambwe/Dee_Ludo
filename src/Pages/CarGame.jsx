import React from 'react';
import { Star, Rocket, Zap, Shield, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GalacticLudoRules() {
  const nav = useNavigate()
  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        fontFamily: '"Segoe UI", Arial, sans-serif',
        lineHeight: '1.7',
        color: '#333',
      }}
    >
      <h1
        style={{
          fontSize: '42px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '40px',
          color: '#8f5dff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        Dee Ludo Official Rules
      </h1>

      {/* Objective */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          Objective
        </h2>
        <p style={{ fontSize: '18px', color: '#444' }}>
          Be the first player to move all <strong>four</strong> of your tokens from your starting yard, around the board, and safely into the center home triangle.
        </p>
      </section>

      {/* Setup */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          Setup
        </h2>
        <ul style={{ fontSize: '18px', paddingLeft: '30px', color: '#444' }}>
          <li>2–4 players can play.</li>
          <li>Each player chooses a color: Red, Blue, Green, or Yellow.</li>
          <li>All 4 tokens of a player start in their colored yard (corner base).</li>
          <li>Players roll the die once to decide turn order — highest roll starts, then clockwise.</li>
        </ul>
      </section>

      {/* Gameplay */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          How to Play
        </h2>
        <ol style={{ fontSize: '18px', paddingLeft: '30px', color: '#444' }}>
          <li style={{ marginBottom: '12px' }}>
            <strong>Roll the die</strong> on your turn.
          </li>
          <li style={{ marginBottom: '12px' }}>
            To bring a token out of the yard → Roll a <strong style={{ color: '#dc2626' }}>6</strong>.
          </li>
          <li style={{ marginBottom: '12px' }}>
            Move one token clockwise by the number rolled.
          </li>
          <li style={{ marginBottom: '12px' }}>
            Every time you roll a <strong style={{ color: '#dc2626' }}>6</strong> → Get an <strong>extra turn</strong>!
          </li>
          <li style={{ marginBottom: '12px' }}>
            If you have no legal move → Your turn ends.
          </li>
        </ol>
      </section>

      {/* Special Rules Grid */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#1e293b', marginBottom: '24px' }}>
          Special Rules
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Capturing */}
          <div style={{ backgroundColor: '#fef3c7', padding: '20px', borderRadius: '12px', borderLeft: '6px solid #f59e0b' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#92400e', marginBottom: '10px' }}>
              Capturing (Knock Out)
            </h3>
            <ul style={{ paddingLeft: '20px', fontSize: '17px' }}>
              <li>Land exactly on an opponent’s token (not on a safe square) → Capture it!</li>
              <li>Captured token goes back to the opponent’s yard.</li>
              <li>Captured token needs a 6 again to come out.</li>
            </ul>
          </div>

          {/* Safe Squares */}
          <div style={{ backgroundColor: '#dbeafe', padding: '20px', borderRadius: '12px', borderLeft: '6px solid #3b82f6' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>
              Safe Squares
            </h3>
            <ul style={{ paddingLeft: '20px', fontSize: '17px' }}>
              <li>Star squares (★) are safe — no capturing.</li>
              <li>Colored starting square of each player is safe.</li>
              <li>The entire home column (colored path to center) is always safe.</li>
            </ul>
          </div>

          {/* Block */}
          <div style={{ backgroundColor: '#d1fae5', padding: '20px', borderRadius: '12px', borderLeft: '6px solid #10b981' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#065f46', marginBottom: '10px' }}>
              Block (Double Token)
            </h3>
            <ul style={{ paddingLeft: '20px', fontSize: '17px' }}>
              <li>Two of your own tokens on the same square form a block.</li>
              <li>Opponents cannot land on or pass through a block.</li>
            </ul>
          </div>

          {/* Three 6s Rule */}
          <div style={{ backgroundColor: '#fee2e2', padding: '20px', borderRadius: '12px', borderLeft: '6px solid #ef4444' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#991b1b', marginBottom: '10px' }}>
              Three 6s in a Row
            </h3>
            <p style={{ fontSize: '17px' }}>
              If you roll three 6s consecutively → Your turn is skipped (no move on the third 6).
            </p>
          </div>
        </div>
      </section>

      {/* Winning */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          Home Stretch & Winning
        </h2>
        <ul style={{ fontSize: '18px', paddingLeft: '30px', color: '#444' }}>
          <li>After completing one full lap, enter your colored home column.</li>
          <li>You must roll the <strong>exact number</strong> to move tokens up the home column.</li>
          <li>Get all 4 tokens into the center triangle → You win!</li>
          <li>Game continues for remaining players to determine 2nd, 3rd, etc.</li>
        </ul>
      </section>

      {/* Ludo King Extra */}
    

      {/* Final Button */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button
          onClick={()=>{nav("/")}}
          style={{
            backgroundColor: '#1d4ed8',
            color: 'white',
            padding: '14px 40px',
            fontSize: '20px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 6px 15px rgba(29,78,216,0.4)',
            transition: 'all 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
        >
          Got It! Let’s Play Ludo King
        </button>
      </div>
    </div>
  );
}