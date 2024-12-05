import { Link } from "react-router-dom";

export default function AocNav(){
    const itemCss = {padding: "5px 15px"}
    return <nav className="nav" style={{position: "absolute", top: "42px", left:0, width: "100%", height: "42px", background: "lightgray"}}>
        <Link style={itemCss} to="/aoc/1" className="link" title="Day 1">Day 1</Link>
        <Link style={itemCss} to="/aoc/2" className="link" title="Day 2">Day 2</Link>
        <Link style={itemCss} to="/aoc/3" className="link" title="Day 3">Day 3</Link>
        <Link style={itemCss} to="/aoc/4" className="link" title="Day 4">Day 4</Link>
    </nav>
}