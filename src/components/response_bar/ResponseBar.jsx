import "./ResponseBar.css";

const ResponseBar = ({ responses }) => {
  return (
    <div className="response-bar">
      {responses.map((response, i) => (
        <div className={"response " + response} id={i} key={"r" + i}></div>
      ))}
    </div>
  );
};

export default ResponseBar;
