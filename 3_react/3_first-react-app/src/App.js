import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // let count = 0;

  const incrementHandler = () => {
    // console.log("clicked");
    setCount((prevCount) => prevCount + 1);
  };
  const decrementHandler = () => {
    const checkDecrementCount = count - 1;

    if (checkDecrementCount > 0 || checkDecrementCount === 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <h1>count : {count}</h1>
      <h2>{count > 0 ? "Value is greater then zero" : "Value is zero"}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  );
}
export default App;
