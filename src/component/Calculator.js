import React, {useState} from 'react';
//FAULTS:
//1-.CSS DESIGN
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
        debugger;
        
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
                setValue(eval(resultValue + operatorValue + newValue));
                setOperator("");
                //setCurrentValue("0");
                setNewValue("0");
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
        <div id='backgroundCalculator'>
            <div id='inputNumber'>{ (operatorValue !== "" ? newValue : resultValue) }</div>
            <div id='containerBtn'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type='button' className='actionBtn operationBtn' value='+' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn operationBtn' value='-' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn operationBtn' value='*' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn operationBtn' value='/' onClick={ handleEvent }></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type='button' className='actionBtn' value='7' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn' value='8' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn' value='9' onClick={ handleEvent }></input>
                            </td>
                            <td rowSpan="4">
                                <input type='button' className='actionBtn' id='equalBtn' value='=' onClick={ handleEvent }></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type='button' className='actionBtn' value='4' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn' value='5' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn' value='6' onClick={ handleEvent }></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type='button' className='actionBtn' value='1' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn' value='2' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn' value='3' onClick={ handleEvent }></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type='button' className='actionBtn' value='0' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn' value='.' onClick={ handleEvent }></input>
                            </td>
                            <td>
                                <input type='button' className='actionBtn' id='acBtn' value='AC' onClick={ handleEvent }></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calculator;
