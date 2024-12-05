import { useParams } from 'react-router-dom';
import AocNav from "./AocNav";
import D1Main from './Day1/D1Main';
import D2Main from './Day2/D2Main';
import D3Main from './Day3/D3Main';
import D4Main from './Day4/Day4Main';

export default function AoCMain() {

    const {day} = useParams()

    return <>
        <AocNav />
        {parseInt(day) === 1 && <D1Main />}
        {parseInt(day) === 2 && <D2Main />}
        {parseInt(day) === 3 && <D3Main />}
        {parseInt(day) === 4 && <D4Main />}
        {day === "2c" && <D2Main />}
    </>
}