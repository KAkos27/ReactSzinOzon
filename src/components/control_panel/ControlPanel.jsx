const ControlPanel = ({ colors, onSelectColor }) => {
  const handleNewGame = () => {};

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
      <button onClick={handleNewGame}>Új Játék!</button>
    </div>
  );
};

export default ControlPanel;
