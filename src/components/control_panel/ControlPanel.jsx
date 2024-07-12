const ControlPanel = ({ colors, onSelectColor, onNewGame }) => {
  return (
    <div className="control-panel">
      {colors.map((color, i) => (
        <button
          className={color}
          id={color}
          key={"b" + i}
          onClick={onSelectColor}
        >
          {color}
        </button>
      ))}
      <button onClick={onNewGame}>Új Játék!</button>
    </div>
  );
};

export default ControlPanel;
