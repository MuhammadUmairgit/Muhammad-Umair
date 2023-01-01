import React from "react";

function DisplayContent() {
  return (
    <li className="collection-item">
      List Item
      <a href="./" className="delete-item secondary-content">
        <i className="fa fa-remove"></i>
      </a>
    </li>
  );
}

export default DisplayContent;
