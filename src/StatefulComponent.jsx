import { useState } from "react"

export default function StatefulComponent() {
    const [count, setCount] = useState(0)
    const increaseCount = () => setCount(count+1)
    return <>
        <h2>Stateful component</h2>
        <p>Count: <small>{count}</small></p>
        <button onClick={increaseCount}>Increase</button>
    </>
}