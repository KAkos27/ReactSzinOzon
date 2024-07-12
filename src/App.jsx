import { useState } from "react";
import ControlPanel from "./components/control_panel/ControlPanel";
import GameBoard from "./components/game_board/GameBoard";
import OpponentsColors from "./components/opponent_colors/OpponentColors";

const INITIAL_COLORS = ["red", "blue", "green", "yellow", "orange", "purple"];

const App = () => {
  let colorId = "white";
  const gameBoardArray = new Array(36).fill(colorId);
  const opponentColorsArray = new Array(4).fill(colorId);

  const [gameBoard, setGameBoard] = useState(gameBoardArray);
  const [opponentColors, setOpponentColors] = useState(opponentColorsArray);
  const [roundCount, setRoundCount] = useState(0);

  const handleColorPick = (event) => {
    colorId = event.target.id;
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard];
      updatedBoard[roundCount] = colorId;
      return updatedBoard;
    });
    setRoundCount(roundCount + 1);
  };

  const handleNewGame = () => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard];
      updatedBoard.fill(colorId);
      return updatedBoard;
    });

    setOpponentColors((prevColors) => {
      const updatedColors = [...prevColors];
      updatedColors.forEach((color, i) => {
        const index = Math.floor(Math.random() * 6);
        color = INITIAL_COLORS[index];
        while (updatedColors.includes(color)) {
          const index = Math.floor(Math.random() * 6);
          color = INITIAL_COLORS[index];
        }
        updatedColors[i] = color;
      });
      return updatedColors;
    });
    setRoundCount(0);
  };

  return (
    <div className="app">
      <OpponentsColors colorsToGuess={opponentColors} />
      <GameBoard board={gameBoard} />
      <ControlPanel
        colors={INITIAL_COLORS}
        onSelectColor={handleColorPick}
        onNewGame={handleNewGame}
      />
    </div>
  );
};

export default App;
