import React from "react";
import "./header.css";

function Title(props) {
  return (
    <div className="jumbotron">
      <h1 className="title">{props.children}</h1>
      <p>
        Search Employees here
        </p>
    </div>
  )
}

export default Title;