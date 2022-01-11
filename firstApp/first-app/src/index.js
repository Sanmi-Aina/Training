import React from "react";
import reactDom from "react-dom";

function Greeting(){

  return <h4>This is the First Component</h4>;
}

reactDom.render(<Greeting />, document.getElementById('root'));