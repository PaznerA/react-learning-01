import ListItem from "./ListItem"

export default function DataTypeTest() {

    var getListItem = function(item, i) {
        return <ListItem key={i} name={item} />
    }

    var items = ["prvni", "druhy", "treti"]
    const heading = <><small>H</small><b>ello</b></>
    const subheading = "Světe!"

    return <>
    <h2>Data type test</h2>
    <div className="box">
        <h5 className="pokus">{heading}</h5>
        <p>{subheading}</p>
        <hr />
        <b>List - component</b>
        <ul className="flex flex-column">
            {items.map((item, i) => getListItem(item, i) )}
        </ul>
        <hr />
        <b>Just a list - no component</b>
        <div className="pokus2">{items}</div>
    </div>
    </>
}