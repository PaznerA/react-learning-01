import { Link } from "react-router-dom";

export default function Nav(){
    const itemCss = {padding: "5px 15px"}
    return <nav className="nav" style={{position: "absolute", top: 0, left:0, width: "100%", height: "42px", background: "lightgray"}}>
        <Link style={itemCss} to="/" className="link" title="Home">Home</Link>
        <Link style={itemCss} to="/aoc" className="link" title="Advent of code">AoC</Link>
        <Link style={itemCss} to="/calc" className="link" title="Calculator">Calc</Link>
        <Link style={itemCss} to="/demos" className="link" title="Demos">Demos</Link>
    </nav>
}