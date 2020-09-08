//Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";
//Import Calculator component
import Calculator from "./component/Calculator";
//Import styles for index.js
import './styles/index.css';
//const for root 
const elemento = document.querySelector("#root");
//Render the Calculatos componente in elemento
ReactDOM.render(<Calculator value={69}/>, elemento);
