import { useState } from "react";
import ControlPanel from "./components/control_panel/ControlPanel";
import GameBoard from "./components/game_board/GameBoard";
import OpponentsColors from "./components/opponent_colors/OpponentColors";

const INITIAL_COLORS = ["red", "blue", "green", "yellow", "orange", "purple"];

const App = () => {
  const [gameBoard, setGameBoard] = useState([
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  let [roundCount, setRoundCount] = useState(0);
  let colorId = "white";

  const handleColorPick = (event) => {
    colorId = event.target.id;
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard];
      updatedBoard[roundCount] = colorId;
      return updatedBoard;
    });
    console.log(roundCount);
    setRoundCount(roundCount + 1);
  };

  return (
    <div className="app">
      <OpponentsColors colors={INITIAL_COLORS} />
      <GameBoard board={gameBoard} />
      <ControlPanel colors={INITIAL_COLORS} onSelectColor={handleColorPick} />
    </div>
  );
};

export default App;
