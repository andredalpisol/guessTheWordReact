import "./GameOver.css";

export const GameOver = ({ retry, score }) => {
  return (
    <div className="gameOver">
      <h1> Fim de jogo </h1>
      <button onClick={retry}> Resetar jogo </button>
      <span> Sua pontuação foi {score} </span>
    </div>
  );
};
