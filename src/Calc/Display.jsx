export default function Display({out}){
    return <>
        <input id="cmdLine" type="text" name="cmdLine" value={out} readOnly={true} />
    </>
}