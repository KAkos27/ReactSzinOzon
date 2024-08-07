import "./ControlPanel.css";

const ControlPanel = ({ colors, onSelectColor, onNewGame, status }) => {
  const visiblityClass = status ? "hidden" : "";

  return (
    <div className="control-panel">
      {colors.map((color, i) => (
        <button
          className={color + " " + visiblityClass}
          id={color}
          key={"b" + i}
          onClick={onSelectColor}
        ></button>
      ))}
      <button className="new-game" onClick={onNewGame}>
        Új Játék!
      </button>
    </div>
  );
};

export default ControlPanel;
