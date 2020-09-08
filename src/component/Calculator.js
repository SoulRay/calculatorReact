import React from 'react'

const Calculator = ({value}) => {
    return (
        <div>
            <div id='backgroundCalculator'>
                <div id="inputNumber"></div>
                <div className="btnNumber">0</div>
                <div className="btnNumber">1</div>
                <div className="btnNumber">2</div>
                <div className="btnNumber">3</div>
                <div className="btnNumber">4</div>
                <div className="btnNumber">5</div>
                <div className="btnNumber">6</div>
                <div className="btnNumber">7</div>
                <div className="btnNumber">8</div>
                <div className="btnNumber">9</div>
            </div>
        </div>
    )
}

export default Calculator
