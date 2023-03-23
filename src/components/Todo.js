export default function Todo(props){
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.status} onChange={() => props.toggleStatus(props.id)}/>
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
        </li>
    )
}