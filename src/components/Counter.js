import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(Math.floor(Math.random() * 10 + 1));

  const decreaseHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const increaseHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={decreaseHandler}>-</button>
      <span>{count}</span>
      <button onClick={increaseHandler}>+</button>
    </div>
  );
};

export default Counter;
