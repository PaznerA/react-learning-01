import { useState } from "react";
import { loadText } from "../../Core/TextLoader";
import FileProcessor from "./FileProcessor";

export default function Day3() {

    const [text, setText] = useState("no data") 

    const getText = (path) => {
        loadText(path)
        .then(
            (data) => setText(data)
        ).catch(
            (reason) => setText(reason)
        )
    }

    // const regex = /[A-Z]/g;
    const NUMBER_LIST = getText("./RawDataD3.txt")
    console.log(NUMBER_LIST)
    // const found = NUMBER_LIST.match(regex)
    return <>
    <FileProcessor />
        <p>Text:</p>
        <p>{text ? text : "Fetching data"}</p>
    </>
}