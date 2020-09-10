import React, {useState} from 'react';
//FAULTS:
//2-.DIVISION BY ZERO
//3-.EXTRA DECIMAL IN DESIGN
//4-.EVAL() WARNING

//Component Calculator
const Calculator = ({ initialValue }) => {
    //Import Hook useState
    const [resultValue, setValue] = useState(initialValue);
    //const [currentValue, setCurrentValue] = useState("0");
    const [newValue, setNewValue] = useState("0");
    const [operatorValue, setOperator] = useState("");

    //Create event
    const handleEvent = (event) => {
        //debugger;
        
        switch (event.target.value) {
            
            case '+':
            case '-':
            case '*':
            case '/':
                setOperator(event.target.value);
                break;

            case 'AC':
                setValue("0");
                setOperator("");
                //setCurrentValue("0");
                setNewValue("0");
                break;

            case '=':
                if (operatorValue !== "") {
                    setValue(eval(resultValue + operatorValue + newValue));
                    setOperator("");
                    //setCurrentValue("0");
                    setNewValue("0");
                }
                break;
        
            default:
                if (operatorValue !== "") {
                    if (newValue.indexOf(".") > 0 && event.target.value === ".") {
                        return;
                    }
                    setNewValue((newValue === "0" && event.target.value !== "." ? "" : newValue) + event.target.value);
                } else {
                    if (resultValue.indexOf(".") > 0 && event.target.value === ".") {
                        return;
                    }
                    setValue((resultValue === "0" && event.target.value !== "." ? "" : resultValue) + event.target.value);
                }
                //setCurrentValue((currentValue === "0" ? "" : currentValue) + event.target.value);

                break;
        }
    }

    return (
        <div>
            <div id='header'>
                Calculator
            </div>
            <div id='backgroundCalculator'>
                <div id='inputNumber'>
                    <div>
                        { (operatorValue !== "" ? newValue : resultValue) }
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
