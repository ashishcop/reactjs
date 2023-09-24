import { useEffect, useState } from "react"
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./TodoList";

export default function App() {

  const [todos, setTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (!localValue) return [];
    return JSON.parse(localValue)
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])



  function completeTodo(id, checked) {
    setTodo(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: checked }
        }
        return todo;
      })
    })

  }

  function addItemsTodo(title) {
    setTodo((currentTodos) => [...currentTodos, { id: crypto.randomUUID(), title: title, completed: false }]);
  }

  function deleteTodo(id) {
    setTodo(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos)


  return <div className="container border">
    <NewTodoForm onSubmit={addItemsTodo} />
    <h2 className="mt-2"> To do list</h2>
    <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
  </div>
}

