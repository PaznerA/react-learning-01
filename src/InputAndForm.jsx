import { useState } from "react";

export default function InputAndForm() {

    const [name, setName] = useState('Pepa')

    const [savedName, setSavedName] = useState()

    const handleInputChange = (e) => setName(e.target.value)
    const formSubmit = (e) => {
        setSavedName(name)
        e.preventDefault()
    } 
    return <>
    <h2>Input and form</h2>
    <form onSubmit={formSubmit}>
    <input type="text" value={name} onChange={handleInputChange}/>
    <button>Save</button>
    </form>
    <p>Name: {savedName}</p>
    </>
}