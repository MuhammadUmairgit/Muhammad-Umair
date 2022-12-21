import React from "react";

function SubmitButton(event) {
  const submitButton = () => {
    event.preventDefault();
    alert("name");
  };


  return (
    <button
      type="submit"
      class="btn btn-primary"
      onClick={(submitButton)}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
