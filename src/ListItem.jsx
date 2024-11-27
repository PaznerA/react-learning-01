export default function ListItem({id, name}) {

    return <>
        <li className="list-item" key={id}>{name}</li>
    </>
}