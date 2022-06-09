import React, { useState } from "react";

const Input = (props) => {
  const [ınputValue, setInputValue] = useState("");
  const ınputvhangehandler = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={ınputvhangehandler} />
      <p>{ınputValue}</p>
    </>
  );
};

export default Input;
