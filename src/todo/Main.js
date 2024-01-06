import { useState } from "react";
import TodoList from "./ToDoList";

const initial_state = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];
function Main() {
  const [todo, setTodo] = useState(initial_state);

  const handelOnChange = (uTodo) => {
        todo.map(t => {
            if(t.id == uTodo.id){
                return uTodo;
            }
            return t;
        })
  };

  const handleOnDelete= (id) => {
    setTodo(todo.filter(to=> to.id != id))
  }

  return (
      <div>
        <TodoList 
        todos={todo}
        onChange={handelOnChange}
        onDelete={handleOnDelete} />
      </div>
  );
}

export default Main;
