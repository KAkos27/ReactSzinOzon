import "./OpponentColors.css";

const OpponentsColors = ({ colorsToGuess, status }) => {
  const visiblityClass = status ? "hidden" : "";

  return (
    <div className="opponent-colors">
      {colorsToGuess.map((randColor, i) => (
        <span className={randColor + " " + visiblityClass} key={i}></span>
      ))}
    </div>
  );
};

export default OpponentsColors;
