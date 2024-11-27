import CalcBtn from "./CalcBtn";

export default function Calc() {
    const keyboard = [
        ["7", "8", "9", "+"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "*"],
        ["", "0", "", "/"],
    ];

    let getRow = function drawRow(rowData) {
        return rowData.map((text) => <td><CalcBtn text={text}/></td>)
    }

    return <table>
        <tbody>
        {keyboard.map( function(row, i) {
            return <tr key={i}>
                {getRow(row)}
            </tr>
        })}
        </tbody>
    </table>
}