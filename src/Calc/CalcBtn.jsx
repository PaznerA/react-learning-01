export default function CalcBtn({text}) {
    if(text === "") {
        return
    }
    return <button>{text}</button>
}