import getDay2Out from "./Day2";
import Day2Solution from "./Day2Solution";
import Day2Solution2 from "./Day2Solution2";

export default function D2Main() {
    const { res1, res2} = getDay2Out()
    return <>
        <div>
            <br />
            The result of day two is: <b>{res1}</b>
            <br />
            The err result of day two is: <b>{res2}</b>
        </div>
        <Day2Solution />
        <Day2Solution2 />
    </>
}