import React, { useState } from 'react';

function App() {

  const [gameState, setGameState] = useState('ENTRY');
  const [hint, setHint] = useState(150);
  const [hintCount, setHintCount] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const initGame = () => {
    setGameState('RUN');
    setMin(0);
    setMax(300);
    setHintCount(1);
    setHint(150);
  };

  const smaller = () => {
    setHintCount(hintCount + 1);
    setMax(hint);
    const nextHint = parseInt((hint - min) / 2) + min;
    setHint(nextHint);
  };

  const bigger = () => {
    setHintCount(hintCount + 1);
    setMin(hint);
    const nextHint = parseInt((max - hint) / 2) + hint;
    setHint(nextHint);
  };

  const winner = () => {
    setGameState('END');
  };

  if (gameState === 'ENTRY')
    return (
      <button
        onClick={initGame}>
        Começar a Jogar
      </button>
    );

  if (gameState === 'END')
    return (
      <div>
        <p>Acertei o número {hint} com {hintCount} chutes</p>
        <button onClick={initGame}>Iniciar Novamente</button>
      </div>
    );

  return (
    <div className='app'>
      <p>O seu número é {hint}</p>
      <button onClick={smaller}>Menor</button>
      <button onClick={winner}>Acertou</button>
      <button onClick={bigger}>Maior</button>
    </div>
  );
}

export default App;
