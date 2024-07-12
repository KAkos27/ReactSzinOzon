import "./GameBoard.css";

const GameBoard = ({ board }) => {
  return (
    <div className="game-board">
      {board.map((color, i) => (
        <span className={color} key={"g" + i}></span>
      ))}
    </div>
  );
};

export default GameBoard;
