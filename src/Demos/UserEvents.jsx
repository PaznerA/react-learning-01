export default function UserEvents() {

    const btns = ["a", "b", "c"]

    function handleClick() {
        console.log("clicked")
    }

    function handleAnotherClick(e) {
        console.log(e.target.textContent)
    }
    return <>
    <h2>User events</h2>
     <button onClick={handleClick}>Click me</button>
     {btns.map((b, i) => <button key={i} onClick={(e) => handleAnotherClick(e)}>{b}</button>)}
    </>
}