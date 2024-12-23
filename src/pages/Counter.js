import React, { useState } from "react";
import "../styles/Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="cont">
      <h2 style={{ color: "white", fontSize: "70px" }}>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <FontAwesomeIcon
        onClick={() => setCount(count + 2)}
        icon={faPlus}
        size="8x"
      />
    </div>
  );
}

export default Counter;
