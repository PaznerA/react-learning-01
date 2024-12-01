import CLR_BTN from "./ClrBtn";
export default function Keyboard ({handle}) {

    const keyboard = [
        ["7", "8", "9", "+"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "*"],
        ["", "0", CLR_BTN, "/"],
    ];

    let getRow = function (rowData) {
        return rowData.map((text, i) => 
            <td key={i}>
                {text && <button className={(Number.isInteger(parseInt(text))) ? "number" : "symbol"} onClick={() => handle(text)} >{text}</button>}
            </td>
        )
    }

    return <>
        {keyboard.map( function(row, i) {
            return <tr key={i}>{getRow(row)}</tr>
        })}
    </>
}