import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");
    function addTodo(e) {
        e.preventDefault();
        if (!newItem) return;
        onSubmit(newItem)

        setNewItem("")

    }
    return <form className="form " onSubmit={addTodo}>
        <label className="form-label">Item</label>
        <input id="item" type="text" onChange={e => setNewItem(e.target.value)} value={newItem} className="form-control" />
        <button className='form-control btn btn-primary mt-2'>Add Item</button>
    </form>
}