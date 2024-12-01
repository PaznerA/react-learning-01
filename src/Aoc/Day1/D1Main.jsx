import getDay1Out from "./Day1";
import getDay1OutByClaude from "./Day1ByClaude";

export default function D1Main() {
    return <>
        <ul>
            <li>The result of day one is: <b>{getDay1Out()}</b></li>
            <li>The result of day (by Claude.ai) one is: <b>{getDay1OutByClaude()}</b></li>
        </ul>
    </>
}