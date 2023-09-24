import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("");
  return <div className="container border"><form className="form ">
    <label htmlFor="item" className="form-label">Item</label>
    <input id="item" type="text" onChange={e => setNewItem(e.target.value)} value={newItem} className="form-control" />
    <button className='form-control btn btn-primary mt-2'>Add Item</button>
  </form>
    <h2 className="mt-2"> To do list</h2>
    <ul class="list-group">
      <li class="list-group-item "><div className="form-check">
        <input class="form-check-input" type="checkbox" value="" id="item1" />
        <label class="form-check-label" for="item1">
          Default checkbox
        </label></div></li> <li class="list-group-item "><div className="form-check">
          <input class="form-check-input" type="checkbox" value="" id="item2" />
          <label class="form-check-label" for="item2">
            Default checkbox
          </label></div></li> <li class="list-group-item "><div className="form-check">
            <input class="form-check-input" type="checkbox" value="" id="item3" />
            <label class="form-check-label" for="item3">
              Default checkbox
            </label></div></li>

    </ul>
  </div>
}

