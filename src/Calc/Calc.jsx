import { useState } from "react";
import "./Calc.css"
import Display from "./Display";
import Keyboard from "./Keyboard";
import CLR_BTN from "./ClrBtn";

export default function Calc() {

    const [out, setOut] = useState('')
    const [err, setErr] = useState('')

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

    return <>
    <h2>Calculator WIP demo</h2>
    {err && <><p style={{fontSize: "18px"}}><b>Error: </b><i style={{color: "red"}}>{err}</i></p><hr /></>}
    <table className="calculator">
        <thead>
            <tr>
                <th colSpan="3"><Display out={out} /></th>
                <th><button className="symbol" onClick={showResult}>=</button></th>
                </tr>
        </thead>
        <tbody>
            <Keyboard handle={handleBtnClick} />
        </tbody>
    </table>
    </>
}