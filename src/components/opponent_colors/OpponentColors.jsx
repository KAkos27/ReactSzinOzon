import "./OpponentColors.css";

const OpponentsColors = ({ colorsToGuess }) => {
  return (
    <div className="opponent-colors">
      {colorsToGuess.map((randColor, i) => (
        <span className={randColor} key={i}></span>
      ))}
    </div>
  );
};

export default OpponentsColors;
