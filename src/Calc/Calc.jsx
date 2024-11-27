import { useState } from "react";
import "./Calc.css"

export default function Calc() {

    const [out, setOut] = useState('');
    const [input, setInput] = useState('');


    const keyboard = [
        ["7", "8", "9", "+"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "*"],
        ["", "0", "", "/"],
    ];
    function calculate () {

        setOut(input)
    }

    let getRow = function (rowData) {
        return rowData.map((text, i) => 
            <td key={i}>
                {text && <button onClick={() => {setInput(text); calculate() }} text={text}>{text}</button>}
            </td>
        )
    }

    return <table className="calculator">
        <thead>
            <tr><th colSpan="4"><input id="cmdLine" type="text" name="cmdLine" defaultValue="" readOnly={true} value={out} /></th></tr>
        </thead>
        <tbody>
        {keyboard.map( function(row, i) {
            return <tr key={i}> {getRow(row)} </tr>
        })}
        </tbody>
    </table>
}