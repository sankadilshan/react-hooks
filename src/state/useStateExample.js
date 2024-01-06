import { useState } from "react";
import "./styles.css";

function UseStateExample() {
  const [inc, setInc] = useState(0);

  var handleIncrement = () => {
    setInc(inc + 1);
  };

  var handleDecrement = () => {
    setInc(inc - 1);
  };

  const btn_diabled = inc < 1;
  const color = inc > 0 ? "green-back" : "maroon-back";
  const disabled_button = {
    color: "white",
    backgroundColor: "black",
  };
  const default_button = {
    color: "black",
    backGroundColor: "white",
  };
  const disabled = btn_diabled ? disabled_button : default_button;
  return (
    <div className="flex state-container text">
      <div>
        <div>
          <button onClick={handleIncrement} className="button">
            increment
          </button>
        </div>
        <div>
          <button
            style={disabled}
            className="button"
            disabled={btn_diabled}
            onClick={handleDecrement}
          >
            decrement
          </button>
        </div>
      </div>
      <div>
        <div>
          <h1 className="header"> Count </h1>
          <div>{inc}</div>
        </div>
      </div>
      <div>
        <div className={`status ${color}`} />
      </div>
    </div>
  );
}

export default UseStateExample;
