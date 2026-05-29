import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter => counter+1);
    if (counter >= 15) {
      setCounter(15);
    }
  };

  const decCounter = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  };

  return (
    <>
      <h3>Counter Value : {counter}</h3>

      <button onClick={incCounter}>Add</button>
      <button onClick={decCounter}>remove</button>
    </>
  );
}

export default App;
