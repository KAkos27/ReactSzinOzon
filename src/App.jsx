import { useState } from "react";
import ControlPanel from "./components/control_panel/ControlPanel";
import GameBoard from "./components/game_board/GameBoard";
import OpponentsColors from "./components/opponent_colors/OpponentColors";
import ResponseBar from "./components/response_bar/ResponseBar";

const INITIAL_COLORS = ["red", "blue", "green", "yellow", "orange", "purple"];
const BOARD_LENGTH = 36;

const App = () => {
  let colorId = "empty";

  const opponentColorsArray = new Array(4).fill(colorId);
  const gameBoardArray = new Array(BOARD_LENGTH).fill(colorId);
  const responseArray = new Array(BOARD_LENGTH).fill("white");
  const responsesToAddArray = new Array(BOARD_LENGTH).fill("white");

  const [responsesToAdd, setResponsesToAdd] = useState(responsesToAddArray);
  const [opponentColors, setOpponentColors] = useState(opponentColorsArray);
  const [colorResponse, setColorResponse] = useState(responseArray);
  const [gameBoard, setGameBoard] = useState(gameBoardArray);
  const [roundCount, setRoundCount] = useState(0);

  const handleColorPick = (event) => {
    colorId = event.target.id;
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard];
      updatedBoard[roundCount] = colorId;
      return updatedBoard;
    });

    setTimeout(() => {
      console.log(roundCount);
      console.log(opponentColors[0]);
      console.log(opponentColors[1]);
      console.log(opponentColors[2]);
      console.log(opponentColors[3]);
      console.log("-----------");
      console.log(gameBoard[roundCount]);
      console.log(gameBoard);
    }, 1000);

    const realRoundCount = roundCount + 1;
    if (realRoundCount % 4 === 0) {
      setColorResponse(() => {
        const updatedResponses = [...responsesToAdd];
        return updatedResponses;
      });
    }
    setRoundCount(() => roundCount + 1);
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
        do {
          const index = Math.floor(Math.random() * 6);
          color = INITIAL_COLORS[index];
        } while (updatedColors.includes(color));
        updatedColors[i] = color;
      });
      return updatedColors;
    });
    setRoundCount(0);
  };

  return (
    <div className="app">
      <OpponentsColors colorsToGuess={opponentColors} />
      <ResponseBar responses={colorResponse} />
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
