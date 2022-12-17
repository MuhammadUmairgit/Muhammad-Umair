import { useState } from "react";
import "./App.css";

function App() {
  const [count, sCount] = useState(0);

  const incrementHandler = () => {
    sCount((zero) => zero + 1);
  };
}

return(
<button onClick={incrementHandler}>Increment</button>
)
export default App;
