import { useParams } from 'react-router-dom';
import AocNav from "./AocNav";
import D1Main from './Day1/D1Main';
import D2Main from './Day2/D2Main';

export default function AoCMain() {

    const {day} = useParams()

    return <>
        <AocNav />
        {parseInt(day) === 1 && <D1Main />}
        {parseInt(day) === 2 && <D2Main />}
        {day === "2c" && <D2Main />}
    </>
}