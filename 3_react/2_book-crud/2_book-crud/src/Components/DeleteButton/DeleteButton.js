import React from "react";

function DeleteButton() {
  const deleteButtonHandler = (event) => {
    event.preventDefault();
    // console.log("deletebutton");
    const deleteConstant = document.getElementById("book-list");
    deleteConstant.remove();
    console.log(deleteConstant, "deleteconst");
  };
  return (
    <button className="btn btn-danger" onClick={deleteButtonHandler}>
      Delete
    </button>
  );
}

export default DeleteButton;
