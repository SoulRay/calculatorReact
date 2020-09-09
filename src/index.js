//Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";
//Import Calculator component
import Calculator from "./component/Calculator";
//Import styles for index.js
import './styles/index.css';
//const for root 
const rootElement = document.querySelector("#root");
//Render the Calculator component in rootElement
ReactDOM.render(<Calculator initialValue="0" />, rootElement);
