import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
//Babel will convert this into React.createElement reason why we have to import React on top even though we will not use it directly in our code

console.log(element);
//The application is automatically restarted whenever we save any changes also called as Hot Module Reloading

ReactDOM.render(element, document.getElementById("root"));
