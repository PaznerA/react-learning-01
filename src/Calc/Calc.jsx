import { useState } from "react";
import "./Calc.css"

export default function Calc() {

    const [out, setOut] = useState('');


    const keyboard = [
        ["7", "8", "9", "+"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "*"],
        ["", "0", "", "/"],
    ];
    
    function calculate (inp) {
        setOut(function (oldOut) {
            return "" + oldOut + inp
        })
    }

    function showResult() {
        setOut((out) => {
            return eval(out)
        })
    }

    let getRow = function (rowData) {
        return rowData.map((text, i) => 
            <td key={i}>
                {text && <button className={(Number.isInteger(parseInt(text)) && "number") ? "number" : "symbol"} onClick={() => calculate(text)} text={text}>{text}</button>}
            </td>
        )
    }

    return <>
    <h2>Calculator WIP demo</h2>
    <table className="calculator">
        <thead>
            <tr>
                <th colSpan="3"><input id="cmdLine" type="text" name="cmdLine" value={out} readOnly={true} /></th>
                <th><button className="symbol" onClick={showResult}>=</button></th>
                </tr>
        </thead>
        <tbody>
        {keyboard.map( function(row, i) {
            return <tr key={i}> {getRow(row)} </tr>
        })}
        </tbody>
    </table>
    </>
}