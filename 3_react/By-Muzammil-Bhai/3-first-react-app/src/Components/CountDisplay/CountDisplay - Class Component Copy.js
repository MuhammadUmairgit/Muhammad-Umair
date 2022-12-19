import React, { memo } from "react";

// const CountDisplay = (props) => {
class CountDisplay extends React.Component {
  //   console.log(props, "props");
  render() {
    const { count } = this.props;

    console.log("count display re render");
    return (
      <div>
        <h1>Count: {count}</h1>
        <h2>{count > 0 ? "values is greater than zero" : "value is zero"}</h2>
      </div>
    );
  }
}

//it will prevent re rendering when your component is re render
//it will re render only when your prop have change
export default memo(CountDisplay);
