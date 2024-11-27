import { useState } from "react";
import "./Calc.css"

export default function Calc() {

    const CLR_BTN = "clr"

    const [out, setOut] = useState('')
    const [err, setErr] = useState('')

    const keyboard = [
        ["7", "8", "9", "+"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "*"],
        ["", "0", CLR_BTN, "/"],
    ];
    
    function handleBtnClick (inp) {
        if(inp === CLR_BTN){
            setOut("")
        }else {
            setOut(function (oldOut) {
                return "" + oldOut + inp
            })
        }
    }

    function showResult() {
        setOut((out) => {
            try{
                let result = eval(out)
                if(result !== undefined){
                    setErr("")
                    return result
                }
            } catch (e) {
                setErr(e.message)
            }
        })
    }

    let getRow = function (rowData) {
        return rowData.map((text, i) => 
            <td key={i}>
                {text && <button className={(Number.isInteger(parseInt(text))) ? "number" : "symbol"} onClick={() => handleBtnClick(text)} text={text}>{text}</button>}
            </td>
        )
    }

    return <>
    <h2>Calculator WIP demo</h2>
    {err && <><p style={{fontSize: "18px"}}><b>Error: </b><i style={{color: "red"}}>{err}</i></p><hr /></>}
    <table className="calculator">
        <thead>
            <tr>
                <th colSpan="3"><input id="cmdLine" type="text" name="cmdLine" value={out} readOnly={true} /></th>
                <th><button className="symbol" onClick={showResult}>=</button></th>
                </tr>
        </thead>
        <tbody>
        {keyboard.map( function(row, i) {
            return <tr key={i}>{getRow(row)}</tr>
        })}
        </tbody>
    </table>
    </>
}