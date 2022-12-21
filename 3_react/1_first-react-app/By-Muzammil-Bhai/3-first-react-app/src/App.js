import { useState } from "react";
import CountDisplay from "./Components/CountDisplay/CountDisplay";
import ContactUs from "./Components/ContactUs/ContactUs";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

  const tasks = [
    {
      name: "task one",
    },
    {
      name: "task one",
    },
    {
      name: "task one",
    },
    {
      name: "task one",
    },
    {
      name: "task one",
    },
    {
      name: "task one",
    },
  ];
  // let count = 0;

  const incrementHandler = () => {
    // console.log("clicked!");
    // count = count + 1;
    // console.log(count, "count");
    // count = count + 1;
    setCount((prevCount) => prevCount + 1);
  };

  const decrementHandler = () => {
    const checkDecrementCount = count - 1;

    if (checkDecrementCount > 0 || checkDecrementCount === 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  console.log("app re render");
  return (
    <div className="App">
      <ContactUs />

      <CountDisplay count={count} />

      {/* <h1>Count: {count}</h1>
      <h2>{count > 0 ? "values is greater than zero" : "value is zero"}</h2> */}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>

      <br />

      {/* {show === true && <p>Show / Hide</p>} */}
      {show && <p>Show / Hide</p>}
      <button onClick={() => setShow(!show)}>Show Hide Button</button>

      {/* LISTING or LOOP */}
      {tasks.map((singleTask, index) => {
        return <p key={index}>{singleTask.name}</p>;
      })}
    </div>
  );
}

export default App;
