export function TodoItem({ id, title, completed, completeTodo, deleteTodo }) {
    return <li key={id} className="list-group-item"><div className="form-check">
        <input className="form-check-input" checked={completed}
            onChange={e => completeTodo(id, e.target.checked)}
            type="checkbox" id={id} />
        <label className="form-check-label" >
            {title}
        </label><button type="button" className="btn btn-danger  btn-sm "
            onClick={e => deleteTodo(id)}
        >
            Delete</button>
    </div></li>
}