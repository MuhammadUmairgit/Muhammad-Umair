import React from "react";

const CountDisplay = (props) => {
  //   console.log(props, "props");
  const { count } = props;

  console.log("count display re render");
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>{count > 0 ? "values is greater than zero" : "value is zero"}</h2>
    </div>
  );
};

export default CountDisplay;
