import React, {useState} from 'react';
//Component Calculator
const Calculator = ({ initialValue }) => {
    //Import Hook useState
    const [resultValue, setResultValue] = useState(initialValue);
    const [firstValue, setFirstValue] = useState(initialValue);
    const [secondValue, setSecondValue] = useState("");
    const [operatorValue, setOperatorValue] = useState("");

    //Function for calculate result
    const calculateResult = () => {
        if (operatorValue === "+") {
            setFirstValue((Number(firstValue) + Number(secondValue)).toString());
            setResultValue((Number(firstValue) + Number(secondValue)).toString());
        } else if (operatorValue === "-") {
            setFirstValue((Number(firstValue) - Number(secondValue)).toString());
            setResultValue((Number(firstValue) - Number(secondValue)).toString());
        } else if (operatorValue === "*") {
            setFirstValue((Number(firstValue) * Number(secondValue)).toString());
            setResultValue((Number(firstValue) * Number(secondValue)).toString());
        } else if (operatorValue === "/") {
            setFirstValue((Number(firstValue) / Number(secondValue)).toString());
            setResultValue((Number(firstValue) / Number(secondValue)).toString());
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
                    setSecondValue(resultString);
                    setResultValue(resultString);
                } else {
                    if (firstValue.indexOf(".") > 0 && event.target.value === ".") {
                        return;
                    }
                    resultString = (resultValue === "0" && event.target.value !== "." ? "" : resultValue) + event.target.value;
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
            // case 'Backspace':
                setResultValue("0");
                setOperatorValue("");
                setFirstValue("");
                setSecondValue("");
                break;

            case '=':
            // case 'Enter':
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

    // document.addEventListener("keydown", (e) => {
    //     handleEvent(e.key);
    // });
    //Calculator Design
    return (
        <div>
            <div id='header'>
                Calculator
            </div>
            <div id='backgroundCalculator'>
                <div id='inputNumber'>
                    <div>
                        { Number(resultValue) }
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
