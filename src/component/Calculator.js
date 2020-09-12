import React, {useState} from 'react';
//Import Hook for dynamic CSS 
import {useCss} from 'react-use';

//Component Calculator
const Calculator = ({ initialValue }) => {
    //Import Hook useState
    const [resultValue, setResultValue] = useState(initialValue);
    const [firstValue, setFirstValue] = useState(initialValue);
    const [secondValue, setSecondValue] = useState("");
    const [operatorValue, setOperatorValue] = useState("");
    const [fontSize, setFontSize] = useState("26px");

    //Hook useCss for set dynamic calculator display
    const displayFont = useCss({
        'font-size': fontSize,
        margin: '10px',
        width: '100%',
    });

    //Function for calculate result
    const calculateResult = () => {
        if (operatorValue === "+") {
            setFirstValue((Number(firstValue) + Number(secondValue)).toString());
            setResultValue((Number(firstValue) + Number(secondValue)).toString());
            modifyFont(Number(firstValue) + Number(secondValue));
        } else if (operatorValue === "-") {
            setFirstValue((Number(firstValue) - Number(secondValue)).toString());
            setResultValue((Number(firstValue) - Number(secondValue)).toString());
            modifyFont(Number(firstValue) - Number(secondValue));
        } else if (operatorValue === "*") {
            setFirstValue((Number(firstValue) * Number(secondValue)).toString());
            setResultValue((Number(firstValue) * Number(secondValue)).toString());
            modifyFont(Number(firstValue) * Number(secondValue));
        } else if (operatorValue === "/") {
            setFirstValue((Number(firstValue) / Number(secondValue)).toString());
            setResultValue((Number(firstValue) / Number(secondValue)).toString());
            modifyFont(Number(firstValue) / Number(secondValue));
        }
    }

    //Function for calculator actions button
    const handleEvent = (event) => {
        switch (event.target.value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                let resultString = "";
                if (operatorValue !== "" && firstValue !== "") {
                    if (secondValue.indexOf(".") > 0 && event.target.value === ".") {
                        return;
                    }
                    resultString = (secondValue === "" && event.target.value === "." ? "0" : secondValue) + event.target.value;
                    modifyFont(resultString);
                    setSecondValue(resultString);
                    setResultValue(resultString);
                } else {
                    if (firstValue.indexOf(".") > 0 && event.target.value === ".") {
                        return;
                    }
                    resultString = (resultValue === "0" && event.target.value !== "." ? "" : resultValue) + event.target.value;
                    modifyFont(resultString);
                    setFirstValue(resultString);
                    setResultValue(resultString);
                }
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                setOperatorValue(event.target.value);
                if (secondValue !== "") {
                    calculateResult();
                    setSecondValue("");
                }
                break;

            case 'AC':
                setResultValue("0");
                setOperatorValue("");
                setFirstValue("");
                setSecondValue("");
                setFontSize("26px");
                break;

            case '=':
                if (operatorValue !== "" && secondValue !== "") {
                    calculateResult();
                    setOperatorValue("");
                    setSecondValue("");
                }
                break;
        
            default:
                break;
        }
    }

    //Calculate length of number and set a new font size
    const modifyFont = (valueToCheck) => {
        if (Number(valueToCheck).toString().length >= 12) {
            setFontSize("17px");
        } else {
            setFontSize("26px");
        }
    }
    
    //Calculator Design
    return (
        <div>
            <div id='header'>
                Calculator
            </div>
            <div id='backgroundCalculator'>
                <div id='inputNumber'>
                    <div className={displayFont} >
                        { isFinite(Number(resultValue)) === true ? Number(resultValue) : "Error" }
                    </div>
                </div>
                <div id='containerBtn'>
                    <div className='actionColumn'>
                        <div className='actionRow'>
                            <button className='operatorBtn' value='+' onClick={ handleEvent }>+</button>
                        </div>
                        <div className='actionRow'>
                            <button value='7' onClick={ handleEvent }>7</button>
                        </div>
                        <div className='actionRow'>
                            <button value='4' onClick={ handleEvent }>4</button>
                        </div>
                        <div className='actionRow'>
                            <button value='1' onClick={ handleEvent }>1</button>
                        </div>
                        <div className='actionRow'>
                            <button value='0' onClick={ handleEvent }>0</button>
                        </div>
                    </div>
                    <div className='actionColumn'>
                        <div className='actionRow'>
                            <button className='operatorBtn' value='-' onClick={ handleEvent }>-</button>
                        </div>
                        <div className='actionRow'>
                            <button value='8' onClick={ handleEvent }>8</button>
                        </div>
                        <div className='actionRow'>
                            <button value='5' onClick={ handleEvent }>5</button>
                        </div>
                        <div className='actionRow'>
                            <button value='2' onClick={ handleEvent }>2</button>
                        </div>
                        <div className='actionRow'>
                            <button value='.' onClick={ handleEvent }>.</button>
                        </div>
                    </div>
                    <div className='actionColumn'>
                        <div className='actionRow'>
                            <button className='operatorBtn' value='*' onClick={ handleEvent }>x</button>
                        </div>
                        <div className='actionRow'>
                            <button value='9' onClick={ handleEvent }>9</button>
                        </div>
                        <div className='actionRow'>
                            <button value='6' onClick={ handleEvent }>6</button>
                        </div>
                        <div className='actionRow'>
                            <button value='3' onClick={ handleEvent }>3</button>
                        </div>
                        <div className='actionRow'>
                            <button value='AC' id='rowAC' onClick={ handleEvent }>AC</button>
                        </div>
                    </div>
                    <div className='actionColumn'>
                        <div className='actionRow'>
                            <button className='operatorBtn' value='/' onClick={ handleEvent }>÷</button>
                        </div>
                        <div className='actionRowEquals'>
                            <button value='=' onClick={ handleEvent }>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Calculator;
