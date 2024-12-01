import { useState } from "react"

class Hello {
    message = "Hello world!"
    //hard binding this onto this class xD to avoid additional printHello function in component
    print = () => {
        console.log(this.message)
    }
}

export default function StatefulComponent() {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({
       id: 1,    
       name: "Aleš"
    })
    const hello = new Hello()
    // const printHello = () => hello.print() - not necessary since binding
    const [letterList, setLetterList] = useState([
        "a", "b", "c"
    ])

    // const increaseCount = () => setCount(count+2)
    // const increaseCount = () => setCount(count => count+2)
    const increaseCount = () => {
        setCount(function(old){
        return old + 2
        })
        // clone user and edit single property
        setUser(user => ({...user, id: (count + 2) }))
    }

    const addLetter = (letter) => {
        hello.print()
        setLetterList(letterList => ([...letterList, letter]))
    }
    return <>
        <h2>Stateful component</h2>
        <p>Count: <small>{count}</small></p>
        <button onClick={increaseCount}>Increase</button>
        <p>ID:{user.id} Name:  {user.name}</p>
        <button onClick={(e) => {addLetter(e.target.textContent)}}>H</button>
        <button onClick={(e) => {addLetter(e.target.textContent)}}>W</button>
        <button onClick={(e) => {addLetter(e.target.textContent)}}>X</button>
        <ul>
            {letterList.map((letter, i) => <li key={i}>{letter}</li>)}
        </ul>
    </>
}