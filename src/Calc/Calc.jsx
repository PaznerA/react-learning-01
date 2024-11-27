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
        console.log("in: " + input)
        console.log("out:" + out)
        if(input !== NaN){
            setOut(out + "" + input) 
        } else if(input === "+") {
            setOut(out + input)
        } else if(input === "-") {
            setOut(out - input)
        } else if(input === "*") {
            setOut(out * input)
        } else if(input === "/") {
            setOut(out / input)
        }
        let res = eval(out)
        if(res !== undefined && res !== NaN){
            setOut(res)
        }
    }

    let getRow = function (rowData) {
        return rowData.map((text, i) => 
            <td key={i}>
                {text && <button className={Number.isInteger(parseInt(text)) && "number"} onClick={() => {console.log(text); setInput(text); calculate() }} text={text}>{text}</button>}
            </td>
        )
    }

    return <>
    <h2>Calculator WIP demo</h2>
    <table className="calculator">
        <thead>
            <tr><th colSpan="4"><input id="cmdLine" type="text" name="cmdLine" defaultValue="" readOnly={true} /></th></tr>
        </thead>
        <tbody>
        {keyboard.map( function(row, i) {
            return <tr key={i}> {getRow(row)} </tr>
        })}
        </tbody>
    </table>
    </>
}