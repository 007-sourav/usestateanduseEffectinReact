import React, { useState, useEffect } from "react";
function Component1() {
  const [name, setName] = useState("Dharani");
  const [name1, setName1] = useState("Pushpa");
  const [name2, setName2] = useState("Rocky");
  const [name3, setName3] = useState("Vikram");
  const [counter, setCounter] = useState("0");
  useEffect(() => {
    console.log("state isss rendered");
  });
  let changeState = () => {
    setName("Sourav");
  };
  let changeState1 = () => {
    setName1("Sourav");
  };
  let changeState2 = () => {
    setName2("Sourav");
  };
  let changeState3 = () => {
    setName3("VIKRAM VIKRAM VIKRAM");
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{name1}</h1>
      <h1>{name2}</h1>
      <h1>{name3}</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(0 + 1 + counter)}>Increment</button>

      <button onClick={changeState}>UPDATE</button>
      <button onClick={changeState2}>UPDATE</button>
      <button onClick={changeState1}>UPDATE</button>
      <button onClick={changeState3}>ULGANAYAGAN</button>
    </div>
  );
}
export default Component1;
