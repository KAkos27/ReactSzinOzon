import "./OpponentColors.css";

const opponentColors = [0, 0, 0, 0];

const OpponentsColors = ({ colors }) => {
  return (
    <div className="opponent-colors">
      {opponentColors.map((tipp, i) => (
        <span key={i}>{tipp}</span>
      ))}
    </div>
  );
};

export default OpponentsColors;
2;
